import React, { Component } from "react";
import LocalApi from "../../apis/local";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

class NewChallengeForm extends Component {
    onUploadSubmit = (formValues) => {
        const { title, desc, video } = formValues;
        this.uploadFile(video[0], title, desc);
    }

    uploadFile = (file, title, desc) => {
        const fd = new FormData();
        fd.append("video", file);
        fd.append("title", title);
        fd.append("desc", desc);

        LocalApi.post("/challenges/upload", fd)
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

const WrappedNewChallengeForm = reduxForm({
    form: "upload",
    validate: ({
        title, desc
    }) => {
    const errors = {}
    
    if (!title) {
        errors.title = "title is required!"
    }

    if (!desc) {
        errors.desc = "video description is required!"
    }

    return errors;

    }
})(NewChallengeForm);

export default WrappedNewChallengeForm;