import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import LocalApi from "../../apis/local";
import { setAuthToken } from "./../../actions";
import CustomizedDialogDemo from "./../PopUp";
import AuthInput from "./fields/AuthInput";
import Checkbox from "./fields/CheckboxField";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Fab, Typography } from "@material-ui/core/";
import swal from "sweetalert";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Email from "@material-ui/icons/Email";
import LockOutlined from "@material-ui/icons/LockOutlined";
import FaceOutlined from "@material-ui/icons/FaceOutlined";

const styles = theme => ({
  body: {
    margin: "0 25px 0 10px"
  },
  container: {
    display: "flex",
    maxWidth: "400px",
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
  font: {
    color: "white"
  },
  checkboxButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
  }
});

class RegisterForm extends Component {
  onRegisterFormSubmit = formValues => {
    const {
      first_name,
      last_name,
      nickname,
      email,
      password,
      terms_conditions
    } = formValues;
    const { setAuthToken, history } = this.props;

    LocalApi.post("/register", {
      first_name,
      last_name,
      nickname,
      email,
      password,
      terms_conditions
    })
      .then(response => {
        //acquring token
        setAuthToken(response.data.token);
        // Alert box and redirect
        swal("Success!", "Registered!", "success", {
          button: false,
          timer: 2000
        });
        // Redirect after 2s
        setTimeout(() => history.push("/"), 2000);
      })
      .catch(error => swal(":(", `${error}`, "error"));
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <div className={classes.body}>
        <div className={classes.container} onSubmit={this.onRegisterFormSubmit}>
          <form onSubmit={handleSubmit(this.onRegisterFormSubmit)}>
            <Field
              startAdornment={<PermIdentity />}
              name="first_name"
              component={AuthInput}
              placeholder="First Name"
              className={classes.input}
              fullWidth
              value
              inputProps={{
                "aria-label": "Description"
              }}
            />
            <Field
              startAdornment={<PermIdentity />}
              name="last_name"
              component={AuthInput}
              placeholder="Last Name"
              className={classes.input}
              fullWidth
              inputProps={{
                "aria-label": "Description"
              }}
            />
            <Field
              startAdornment={<FaceOutlined />}
              name="nickname"
              component={AuthInput}
              placeholder="Nickname"
              className={classes.input}
              fullWidth
              inputProps={{
                "aria-label": "Description"
              }}
            />
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
              type="email"
            />
            <Field
              startAdornment={<LockOutlined />}
              name="password"
              component={AuthInput}
              placeholder="Password"
              className={classes.input}
              fullWidth
              inputProps={{
                "aria-label": "Description"
              }}
              type="password"
            />

            <div className={classes.checkboxButton}>
              <div className={classes.checkbox}>
                <Field
                  name="terms_conditions"
                  component={Checkbox}
                  className={classes.font}
                  color="primary"
                  type="checkbox"
                />
              </div>
              <CustomizedDialogDemo
                title="Terms and Conditions"
                button="Terms and Conditions"
                content="You agree not to use the App in any way that:
                is unlawful, illegal or unauthorised;
                is defamatory of any other person;
                is obscene or offensive;
                promotes discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;
                infringes any copyright, database right or trade mark of any other person;
                is likely to harass, upset, embarrass, alarm or annoy any other person;
                is likely to disrupt our service in any way; or
                advocates, promotes or assists any unlawful act such as (by way of example only) copyright infringement or computer misuse."
              />
            </div>
            <div>
              <Fab
                type="submit"
                variant="extended"
                color="primary"
                aria-label="Register"
                className={classes.button}
              >
                Register
              </Fab>
            </div>
          </form>
        </div>

        <div>
          <Typography className={classes.signin} variant="caption">
            Already have an account?
            <Link to="/login" className={classes.link}>
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

const WrappedRegisterForm = reduxForm({
  form: "register",
  validate: ({
    first_name,
    last_name,
    nickname,
    email,
    password,
    terms_conditions
  }) => {
    const errors = {};

    if (!first_name) {
      errors.first_name = "Required!";
    } else if (first_name.length > 20) {
      errors.first_name = "Must be 20 characters or less";
    }

    if (!last_name) {
      errors.last_name = "Required!";
    } else if (last_name.length > 20) {
      errors.last_name = "Must be 20 characters or less";
    }

    if (!nickname) {
      errors.nickname = "Required!";
    } else if (nickname.length > 20) {
      errors.nickname = "Must be 20 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Required!";
    } else if (password.length < 6 || password.length > 40) {
      errors.password = "Must be between 6 and 40 characters";
    }

    // FIXME
    // if (!terms_conditions) {
    //   errors.terms_conditions = "Required!";
    // } else if (terms_conditions !== "checked") {
    //   errors.terms_conditions = "Accept!";
    // }

    return errors;
  }
})(withStyles(styles)(RegisterForm));

export default connect(
  null,
  {
    setAuthToken
  }
)(withRouter(WrappedRegisterForm));
