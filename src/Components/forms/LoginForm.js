import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import AuthInput from "./fields/AuthInput";
import FormDialog from "./FormDialog";
import LocalApi from "../../apis/local";
import { setAuthToken } from "./../../actions";
import { getCurrentUser } from "./../../actions";
import swal from "sweetalert";

import { withStyles } from "@material-ui/core/styles";
import { Fab, Typography } from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import LockOutlined from "@material-ui/icons/LockOutlined";

const styles = theme => ({
  container: {
    display: "flex",
    width: "70%",
    margin: "50px auto 0 auto",
    position: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing.unit,
    width: "250px",
    borderRadius: "50px",
    textTransform: "none"
  },
  checkbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "10px",
    maxWidth: "360px",
    alignItems: "center"
  },
  checkboxButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 0 0 0"
  },
  signin: {
    margin: "10px",
    padding: "20px",
    color: "white"
  },
  link: {
    margin: theme.spacing.unit,
    color: theme.palette.primary.main,
    textDecoration: "none"
  },
  hasError: { color: theme.palette.secondary.main }
});

class LoginForm extends Component {
  state = { error: "", hasError: false };

  onLoginFormSubmit = formValues => {
    const { history, setAuthToken, getCurrentUser } = this.props;
    const { email, password } = formValues;

    LocalApi.post("/login", { email, password })
      // async below as redirection to root page requires auth token first
      .then(response => {
        setAuthToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        getCurrentUser();
        history.push("/");
      })
      .catch(err => {
        this.setState({ hasError: true });
      });
  };

  render() {
    const { classes, handleSubmit } = this.props;
    const { hasError } = this.state;

    return (
      <div className={classes.container}>
        <form onSubmit={handleSubmit(this.onLoginFormSubmit)}>
          <Field
            startAdornment={<Email />}
            name="email"
            component={AuthInput}
            placeholder="Email"
            className={classes.input}
            fullWidth
            inputProps={{
              "aria-label": "Description"
            }}
          />
          <Field
            startAdornment={<LockOutlined />}
            name="password"
            component={AuthInput}
            placeholder="Password"
            type="password"
            className={classes.input}
            fullWidth
            inputProps={{
              "aria-label": "Description"
            }}
          />
          {hasError ? (
            <Typography variant="caption" className={classes.hasError}>
              Incorrect email or password
            </Typography>
          ) : null}

          <div className={classes.checkbox}>
            <div className={classes.checkboxButton}>
              <div>
                <FormDialog
                  style={{
                    backgroundColor: "transparent",
                    textTransform: "none"
                  }}
                  buttonText="Forgot password?"
                  header="Reset password"
                  content="A link will be emailed to the address you provide below with instructions."
                  submitButtonText="Send"
                  action={value => {
                    (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) === true ?
                    LocalApi.post("/reseturl", {
                      email: value
                    })
                      .then(res => {
                        if (res.status === 200) {
                          return swal("Success!", "Email sent!", "success", {
                            button: false,
                            timer: 2000
                          });
                        }
                      })
                      .catch(err => {
                        return swal(":(", err.response.data, "warning");
                      })
                    : swal(":(", "Invalid email!", "error")
                    )}}
                />
              </div>
              <Fab
                type="submit"
                variant="extended"
                color="primary"
                aria-label="Add"
                className={classes.button}
              >
                Log In
              </Fab>
            </div>
            <div>
              <Typography className={classes.signin} component="caption">
                Dont have an account?
                <Link to="/register" className={classes.link}>
                  Sign Up
                </Link>
              </Typography>
            </div>
          </div>
          <div />
        </form>
        {"Success" && this.state.error === "success"}
      </div>
    );
  }
}

const WrappedRegisterForm = reduxForm({
  form: "register",
  validate: ({ email, password }) => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required!";
    }

    if (!password) {
      errors.password = "Password is required!";
    }

    return errors;
  }
})(withStyles(styles)(LoginForm));

export default connect(
  null,
  {
    setAuthToken,
    getCurrentUser
  }
)(withRouter(WrappedRegisterForm));
