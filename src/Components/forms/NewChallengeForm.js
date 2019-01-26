import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { connect } from "react-redux";
import { addChallenge } from "./../../actions"
import Button from '@material-ui/core/Button';
import Loader from "./../Loader";

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
        console.log("rendered");
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit= {handleSubmit(this.onUploadSubmit)} encType="multipart/form-data">
                    <div>
                        <Field
                        name="creator_id"
                        component={Input}
                        placeholder="creator_id"
                        type="text"
                        />
                    </div>
                    <div>
                        <Field
                        name="expiry_date"
                        component={Input}
                        placeholder="expiry date"
                        type="date"
                        />
                    </div>
                    <div>
                        <Field
                        name="title"
                        component={Input}
                        placeholder="title"
                        type="text"
                        />
                    </div>
                    <div>
                        <Field
                        name="description"
                        component={Input}
                        placeholder="description of challenge"
                        type="text"
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
        title, description, file
    }) => {
    const errors = {}
    
    if (!title) {
        errors.title = "title is required!"
    }

    if (!description) {
        errors.description = "video description is required!"
    }

    if (!file) {
        errors.description = "file required"
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