import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import AuthInput from "./fields/AuthInput";
import FormDialog from "./FormDialog";
import LocalApi from "../../apis/local";
<<<<<<< HEAD
import { setAuthToken } from "./../../actions";
import { connect } from "react-redux";
=======
import { setAuthToken, getCurrentUser } from "./../../actions";
>>>>>>> bd1db06e6b60193d26254e7f1394c241d406d115

import { withStyles } from "@material-ui/core/styles";
import { Fab, Typography } from "@material-ui/core";

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
    color: "white",
    textDecoration: "none"
  }
});

class LoginForm extends Component {
<<<<<<< HEAD
  state = { error : "" }
    
    onLoginFormSubmit = (formValues) => {
      const { history, setAuthToken } = this.props;
      const { email, password } = formValues;

        LocalApi.post("/login", {email, password})
        // async below as redirection to root page requires auth token first
        .then (response => {
            setAuthToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            history.push("/");            
        })
        .catch(err => console.log(err));
    }
=======
  state = { error: "" };

  onLoginFormSubmit = formValues => {
    const { history, getCurrentUser, setAuthToken } = this.props;
    const { email, password } = formValues;

    LocalApi.post("/login", { email, password })
      // async below as redirection to root page requires auth token first
      .then(response => {
        setAuthToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/");
        getCurrentUser();
      })
      .catch(err => console.log(err));
  };
>>>>>>> bd1db06e6b60193d26254e7f1394c241d406d115

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <div className={classes.container} onSubmit={this.onRegisterFormSubmit}>
        <form onSubmit={handleSubmit(this.onLoginFormSubmit)}>
          <Field
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
                    LocalApi.post("/reseturl", {
                      email: value
                    })
                      .then(res => {
                        if (res.status === 200) {
                          return alert("Email succesfully sent!");
                        }
                      })
                      .catch(err => {
                        let error = "";
                        for (let i in err.response.data) {
                          error += `${err.response.data[i]} \r\n`;
                        }
                        return alert(error);
                      });
                  }}
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
    setAuthToken
  }
)(withRouter(WrappedRegisterForm));
