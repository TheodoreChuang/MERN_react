import React, { Component } from "react";
import LocalApi from "../../apis/local";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

class SubmissionForm extends Component {
    onUploadSubmit = (formValues) => {
        const { title, description, video } = formValues;
        this.uploadFile(video[0], title, description);
    }

    uploadFile = (file, title, description) => {
        const fd = new FormData();
        fd.append("video", file);
        fd.append("title", title);
        fd.append("description", description);

        LocalApi.post("/challenges/submission", fd)
        .then(response => alert("Submitted"))
        .catch(error => alert(error))
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit= {handleSubmit(this.onUploadSubmit)} encType="multipart/form-data">
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
                    name="desc"
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
                    required="true"
                    />
                </div>
                <div>
                    <Field
                    type="submit"
                    component={Input}
                    value="submit"
                    />
                </div>
            </form>
        );
    }
}

//include validation on video on form

const WrappedSubmissionForm = reduxForm({
    form: "submission",
    validate: ({
        title
    }) => {
    const errors = {}
    
    if (!title) {
        errors.title = "title is required!"
    }

    return errors;

    }
})(SubmissionForm);

export default WrappedSubmissionForm;