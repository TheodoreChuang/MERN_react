import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Loader from "./../Loader";
import LocalApi from "./../../apis/local";
import swal from "sweetalert";
import DescriptionOutlined from "@material-ui/icons/DescriptionOutlined";
import GavelOutlined from "@material-ui/icons/GavelOutlined";

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
    await LocalApi.post(`/challenges/${match.params.id}/submissions`, fd)
      .then(res => {
        // if (res.status === 200) {
        //   // Hide button, and remove alert box after 2s
        //   swal("Success!", "File uploaded!", "success", {
        //     button: false,
        //     timer: 2000
        //   });
        // }
        // Redirect after 2s
        setTimeout(() => history.push("/"), 2000);
      })
      .catch(error => swal(":(", `${error}`, "error"));
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
            startAdornment={<GavelOutlined />}
            name="title"
            component={Input}
            placeholder="Title"
            type="text"
          />
        </div>
        <div>
          <Field
            startAdornment={<DescriptionOutlined />}
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
          inputProps= {{accept:"video/*" }}
          />
        </div>
        <div>
          <Button
            style={{ textTransform: "none", color: "primary" }}
            type="submit"
          >
            Submit
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
  validate: ({ title, description, video }) => {
    const errors = {};

    if (!title) {
      errors.title = "Required!";
    } else if (title.length > 60) {
      errors.title = "Must be 60 characters or less";
    }

    if (description && description.length > 360) {
      errors.description = "Must be 360 characters or less";
    }

    if (!video) {
      errors.video = "Required!";
    }

    if (video && video.length < 1) {
      errors.video = "Required!";
    }

    return errors;
  }
})(SubmissionForm);

export default withRouter(WrappedSubmissionForm);
