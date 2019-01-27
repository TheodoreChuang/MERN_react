import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { connect } from "react-redux";
import { addChallenge } from "./../../actions"
import Button from '@material-ui/core/Button';
import Loader from "./../Loader";
import DateField from "./fields/DateField";
import DateHelper from "./fields/DateHelper";

class NewChallengeForm extends Component {
    state = { loading: false }

    onUploadSubmit = (formValues) => {
        const { title, description, video, creator_id, expiry_date } = formValues;
        this.uploadFile(video[0], title, description, creator_id, expiry_date);
        console.log(formValues);
    }

    uploadFile = (file, title, description, creator_id, expiry_date) => {
        const { addChallenge } = this.props;

        // Using FD to let express server our data includes a file type
        const fd = new FormData();
        fd.append("video", file);
        fd.append("title", title);
        fd.append("description", description);
        fd.append("creator_id", creator_id);
        fd.append("expiry_date", expiry_date);
        console.log(fd);
        addChallenge(
        () => {
            console.log("inside cb1");
            this.setState({ loading: true });
        },
        fd, 
        async () =>  {
            await this.setState({ loading: "success" });
        }
        )}

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit= {handleSubmit(this.onUploadSubmit)} encType="multipart/form-data">
                    <div>
                        <Field
                        name="title"
                        component={Input}
                        placeholder="Title of challenge"
                        type="text"
                        />
                    </div>
                    <div>
                        <Field
                        name="description"
                        component={Input}
                        placeholder="Description of challenge"
                        type="text"
                        multiline
                        />
                    </div>
                    <div>
                        <Field
                        name="creator_id"
                        component={Input}
                        placeholder="Creator id"
                        type="text"
                        />
                    </div>
                    <div>
                        <Field
                        name="expiry_date"
                        label="Expiry date"
                        component={DateField}
                        type="date"
                        />
                    </div>
                    <div>
                        <Field
                        name="video"
                        component={Input}
                        type="file"
                        />
                    </div>
                    <div>
                        <Button
                        style={{textTransform: "none"}}
                        type="submit">
                        Upload Challenge
                        </Button>
                    </div>
                </form>
                <div>
                    {this.state.loading === true && <Loader />}
                </div>
                <div>
                    {this.state.loading === "success" && "Upload Succesful!"}
                </div>
            </div>
        );
    }
}

//include validation on video on form

const WrappedNewChallengeForm = reduxForm({
    form: "upload",
    validate: ({
        title, description, creator_id, video, expiry_date
    }) => {
    const errors = {}

    if (!creator_id) {
        errors.creator_id = "Required!"
    }
    
    if (!title) {
        errors.title = "Required!"
    }

    if (!description) {
        errors.description = "Required!"
    }

    if (expiry_date < DateHelper()) {
        errors.expiry_date = "Invalid!"
    }

    if (video) {
        if (video.length < 1 ) {
            errors.video = "Required"
        }
    }

    return errors;

    }
})(NewChallengeForm);

const mapStateToProps = (state) => {
    return {
        challenges: state.challenges
    };
}

export default connect(mapStateToProps, {
    addChallenge
})(WrappedNewChallengeForm);