import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { connect } from "react-redux";
import { addSubmission } from "./../../actions"
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import Loader from "./../Loader";

class SubmissionForm extends Component {
    state = { loading: false }

    onUploadSubmit = (formValues) => {
        const { title, description, video } = formValues;
        const { addSubmission, match, history } = this.props;
        const fd = new FormData();

        fd.append("video", video[0]);
        fd.append("title", title);

        // Conditional as description value might not be entered as it is not mandatory
        if (description) {
            fd.append("description", description);
        }
       
        addSubmission(
            () => {
                this.setState({ loading: true });
            },
            fd, match.params.id,
            () =>  {
                this.setState({ loading: "success" });
            });

        // history.push(`/challenges/${match.params.id}`);
        }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit= {handleSubmit(this.onUploadSubmit)} encType="multipart/form-data">
                <div>
                    <Field
                    name="title"
                    component={Input}
                    placeholder="Title"
                    type="text"
                    />
                </div>
                <div>
                    <Field
                    name="description"
                    component={Input}
                    placeholder="Description of submission"
                    type="text"
                    multiline
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
                    Join Challenge
                    </Button>
                </div>
                <div>
                    {this.state.loading === true && <Loader />}
                </div>
                <div>
                    {this.state.loading === "success" && "Submission Succesful!"}
                </div>
            </form>
        );
    }
}

const WrappedSubmissionForm = reduxForm({
    form: "submission",
    validate: ({
        title, video
    }) => {
    const errors = {}
    
    if (!title) {
        errors.title = "Required!"
    }

    if (video) {
        if (video.length < 1) {
            errors.video = "Required!"
        }
    }

    return errors;

    }
})(SubmissionForm);

const mapStateToProps = (state) => {
    return {
        submissions: state.submissions
    }
}

export default connect(mapStateToProps, {
    addSubmission
}) (withRouter(WrappedSubmissionForm));