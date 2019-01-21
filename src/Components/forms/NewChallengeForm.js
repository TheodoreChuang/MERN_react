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
    
        try {
            LocalApi.post("/challenges/upload", fd);
            // if (error) throw error;
    
            alert("Succesfully submitted");
    
        } catch(error) {
            console.log(error);
        }
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

const WrappedNewChallengeForm = reduxForm({
    form: "upload"
})(NewChallengeForm);

export default WrappedNewChallengeForm;