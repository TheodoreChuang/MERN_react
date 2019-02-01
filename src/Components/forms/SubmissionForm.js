import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Loader from "./../Loader";
import LocalApi from "./../../apis/local";

class SubmissionForm extends Component {
  state = { loading: false };

  onUploadSubmit = async formValues => {
    const { title, description, video } = formValues;
    const { match, history } = this.props;
    const fd = new FormData();

    fd.append("video", video[0]);
    fd.append("title", title);

    // Conditional as description value might not be entered as it is not mandatory
    if (description) {
      fd.append("description", description);
    }

    this.setState({ loading: true });
    await LocalApi.post(`/challenges/${match.params.id}/submissions`, fd);
    history.push("/");
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.onUploadSubmit)}
        encType="multipart/form-data"
      >
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
          <Field name="video" component={Input} type="file" />
        </div>
        <div>
          <Button style={{ textTransform: "none" }} type="submit">
            Join Challenge
          </Button>
        </div>
        <div>{this.state.loading === true && <Loader />}</div>
        <div style={{ color: "green", marginLeft: "10px" }}>
          {this.state.loading === "success" && "Submission Succesful!"}
        </div>
      </form>
    );
  }
}

const WrappedSubmissionForm = reduxForm({
  form: "submission",
  validate: ({ title, video }) => {
    const errors = {};

    if (!title) {
      errors.title = "Required!";
    }

    if (!video) {
      errors.video = "Required!";
    }
    if (video) {
      if (video.length < 1) {
        errors.video = "Required!";
      }
    }

    return errors;
  }
})(SubmissionForm);

export default withRouter(WrappedSubmissionForm);
