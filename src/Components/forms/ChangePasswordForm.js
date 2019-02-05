import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";
import Input from "./fields/Input";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import LockOutlined from "@material-ui/icons/LockOutlined";
import { connect } from "react-redux";
import { Card, withStyles } from "@material-ui/core/";

const styles = theme => ({
  container: {
    minWidth: 235,
    maxWidth: 560,
    padding: theme.spacing.unit * 2
  }
});

class ChangePasswordForm extends Component {
  state = { error: "" };

  onFormSubmit = (formValues, dispatch) => {
    const { history } = this.props;
    const { password, new_password, confirm_password } = formValues;

    if (new_password !== confirm_password) {
      return swal(":(", "Passwords did not match!", "error", {
        button: false,
        timer: 2000
      });
    }

    LocalApi.put(`/changepassword`, { password, new_password })
      .then(res => {
        if (res.status === 200) {
          swal("Success!", "Password updated!", "success", {
            button: false,
            timer: 2000
          });
          setTimeout(() => history.push("/updateinfo"), 2000);
          dispatch(reset("changepassword"));
        }
      })
      .catch(err => {
        this.setState({ error: true });
        return swal(":(", err, "error");
      });
  };

  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <Card className={classes.container}>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field
              startAdornment={<LockOutlined />}
              placeholder="current password"
              name="password"
              component={Input}
              type="password"
            />
          </div>
          <div>
            <Field
              startAdornment={<LockOutlined />}
              placeholder="new password"
              name="new_password"
              component={Input}
              type="password"
            />
          </div>
          <div>
            <Field
              startAdornment={<LockOutlined />}
              placeholder="confirm new password"
              name="confirm_password"
              component={Input}
              type="password"
            />
          </div>
          <div>
            <Button style={{ textTransform: "none" }} type="submit">
              Change Password
            </Button>
          </div>
        </form>
      </Card>
    );
  }
}

const WrappedChangePasswordForm = reduxForm({
  form: "changepassword",
  validate: ({ password, new_password, confirm_password }) => {
    const errors = {};

    if (!password) {
      errors.password = "Current password is required!";
    }

    if (!new_password) {
      errors.new_password = "New password is required!";
    }

    if (new_password !== confirm_password) {
      errors.confirm_password = "New password do not match!";
    }

    return errors;
  }
})(withStyles(styles)(ChangePasswordForm));

export default connect(null)(withRouter(WrappedChangePasswordForm));
