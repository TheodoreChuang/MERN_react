import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import LocalApi from "../../apis/local";
import { setAuthToken } from "./../../actions";
import { connect } from "react-redux";
import Checkbox from "./fields/CheckboxField";

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
    container: {
      display: 'flex',
      width: '70%',
      margin: '50px auto 0 auto',
      position: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      margin: theme.spacing.unit,
      padding: '6px 0',
    },
    margin: {
      width: '200px',
    },
    checkbox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '10px',
      maxWidth: '360px',
      alignItems: 'center',
    },
    checkboxButton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px 0 0 0',
    },
    signin: {
      margin: '10px',
      padding: '20px',
    },
  });

class LoginForm extends Component {
    
    onLoginFormSubmit = (formValues) => {
        const { email, password } = formValues;
        LocalApi.post("/login", {email, password})
        .then(response => {
            setAuthToken(response.data.token);
            this.props.history.push("/");
        })
        .catch(err => console.log(err));
    }

        render() {
            const { classes } = this.props;
            const { handleSubmit } = this.props;
            
            return (
              <div className={classes.container} onSubmit = {this.onRegisterFormSubmit}>

                <form onSubmit = {handleSubmit(this.onLoginFormSubmit)}>
                <Field
                  name="email"
                  component={Input}
                  placeholder="Email"
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Field
                  name="password"
                  component={Input}
                  placeholder="Password"
                  type="password"
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <div className={classes.checkbox}>
                <div className={classes.checkboxButton} >
                <Fab type="submit" variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                    Log In
                </Fab>
                </div>
                <div className={classes.signin}> 
                <Typography>Dont have an account? <Link to="/register">Register</Link></Typography>
                </div>
                </div>
                </form>
              </div>
            );
          }
}

const WrappedRegisterForm = reduxForm({
    form: "register",
    validate: ({ email, password }) => {
        const errors = {}

        if (!email) {
            errors.email = "Email is required!"
        }

        if (!password) {
            errors.password = "Password is required!"
        }

        return errors;
    }
})(withStyles(styles)(LoginForm))

export default connect(null, {
    setAuthToken
}) (WrappedRegisterForm);