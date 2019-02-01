import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { connect } from "react-redux";
import { addChallenge } from "./../../actions"
import Button from '@material-ui/core/Button';
import Loader from "./../Loader";
import DateField from "./fields/DateField";
import DateHelper from "./fields/DateHelper";
<<<<<<< HEAD
import { withRouter } from "react-router-dom";
import LocalApi from "./../../apis/local";
=======
>>>>>>> bd1db06e6b60193d26254e7f1394c241d406d115

class NewChallengeForm extends Component {
    state = { loading: false }

<<<<<<< HEAD
    onUploadSubmit = async (formValues) => {
        const { history } = this.props;
        const { title, description, video, expiry_date } = formValues;
=======
    onUploadSubmit = (formValues) => {
        const { addChallenge } = this.props;
        const { title, description, video, creator_id, expiry_date } = formValues;
>>>>>>> bd1db06e6b60193d26254e7f1394c241d406d115

        const fd = new FormData();
        fd.append("video", video[0]);
        fd.append("title", title);
        fd.append("description", description);
        fd.append("creator_id", creator_id);
        // Conditional as expiry_date value might not be entered as it is not mandatory
        if (expiry_date) {
            fd.append("expiry_date", expiry_date);
        }

        addChallenge(
            // Callbacks added for loading animation
            () => {
                this.setState({ loading: true });
            },
            fd, 
            () =>  {
                this.setState({ loading: "success" });
            }
        )}

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit= {handleSubmit(this.onUploadSubmit)} encType="multipart/form-data"
                style={{ color: "black"}}>
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
                <div
                style={{color: "green", marginLeft: "10px"}}>
                    {this.state.loading === "success" && "Upload Succesful!"}
                </div>
            </div>
        );
    }
}

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

<<<<<<< HEAD
export default (withRouter(WrappedNewChallengeForm));
=======
const mapStateToProps = (state) => {
    return {
        challenges: state.challenges
    };
}

export default connect(mapStateToProps, {
    addChallenge
})(WrappedNewChallengeForm);
>>>>>>> bd1db06e6b60193d26254e7f1394c241d406d115
