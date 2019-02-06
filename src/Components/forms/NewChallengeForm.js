import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import Button from "@material-ui/core/Button";
import Loader from "./../Loader";
import DateField from "./fields/DateField";
import DateHelper from "./fields/DateHelper";
import { withRouter } from "react-router-dom";
import LocalApi from "./../../apis/local";
import { connect } from "react-redux";
import { getCurrentUser } from "./../../actions";
import swal from "sweetalert";
import DescriptionOutlined from "@material-ui/icons/DescriptionOutlined";
import GavelOutlined from "@material-ui/icons/GavelOutlined";

class NewChallengeForm extends Component {
  state = { loading: false };

  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  onUploadSubmit = async formValues => {
    const { history } = this.props;
    const { title, description, video, expiry_date } = formValues;

    const fd = new FormData();
    fd.append("video", video[0]);
    fd.append("title", title);
    fd.append("description", description);

    // Conditional as expiry_date value might not be entered as it is not mandatory
    if (expiry_date) {
      fd.append("expiry_date", expiry_date);
    }

    this.setState({ loading: true });
    await LocalApi.post("/challenges/upload", fd)
      .then(res => {
        // Hide button, and remove alert box after 2s
        if (res.status === 200) {
          swal("Success!", "Challenge Created!", "success", {
            button: false,
            timer: 2000
          });
        }
        // Redirect after 2s
        setTimeout(() => history.push("/challenges"), 2000);
      })
      // TODO test error path
      .catch(error => swal(":(", `${error}`, "error"));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form
          onSubmit={handleSubmit(this.onUploadSubmit)}
          encType="multipart/form-data"
        >
          <div>
            <Field
              startAdornment={<GavelOutlined />}
              name="title"
              component={Input}
              placeholder="Title of challenge"
              type="text"
            />
          </div>
          <div>
            <Field
              startAdornment={<DescriptionOutlined />}
              name="description"
              component={Input}
              placeholder="Description of challenge"
              type="text"
              multiline
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
            <Field name="video" component={Input} type="file" />
          </div>
          <div>
            <Button style={{ textTransform: "none" }} type="submit">
              Upload Challenge
            </Button>
          </div>
        </form>
        <div>{this.state.loading === true && <Loader />}</div>
        <div style={{ color: "green", marginLeft: "10px" }}>
          {this.state.loading === "success" && "Upload Succesful!"}
        </div>
      </div>
    );
  }
}

const WrappedNewChallengeForm = reduxForm({
  form: "upload",
  validate: ({ title, description, video, expiry_date }) => {
    const errors = {};

    if (!title) {
      errors.title = "Required!";
    } else if (title.length > 60) {
      errors.title = "Must be 60 characters or less";
    }

    if (description && description.length > 360) {
      errors.description = "Must be 360 characters or less";
    }

    if (Date.parse(expiry_date) < Date.parse(DateHelper())) {
      errors.expiry_date = "Invalid!";
    }

    if (!video) {
      errors.video = "Required!";
    }

    if (video && video.length < 1) {
      errors.video = "Required!";
    }

    return errors;
  }
})(NewChallengeForm);

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    getCurrentUser
  }
)(withRouter(WrappedNewChallengeForm));
