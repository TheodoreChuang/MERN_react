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
    body: {
        margin: '0 25px 0 10px',
    },
    container: {
      display: 'flex',
      maxWidth: '400px',
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
    },
    signin: {
      margin: '10px',
      padding: '20px',
    },
  });

class RegisterForm extends Component {
    
    onRegisterFormSubmit = (formValues) => {
        const { first_name, last_name, nickname, email, password, terms_conditions } = formValues;
        const { setAuthToken } = this.props;

        LocalApi.post("/register", {first_name, last_name, nickname, email, password, terms_conditions})
        .then(response => {
            //acquring token
            setAuthToken(response.data.token);
            //redirect
            this.props.history.push("/");
        })
        .catch(err => console.log(err));
        }

        render() {
            const { classes } = this.props;
            const { handleSubmit } = this.props;
            
            return (
            <div className={classes.body}>
              <div className={classes.container} onSubmit = {this.onRegisterFormSubmit}>

                <form onSubmit = {handleSubmit(this.onRegisterFormSubmit)}>
                <Field
                  name="first_name"
                  component={Input}
                  placeholder="First Name"
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                /> 
                 <Field
                  name="last_name"
                  component={Input}
                  placeholder="Last Name"
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Field
                  name="nickname"
                  component={Input}
                  placeholder="Nick Name"
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
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
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <div className={classes.checkboxButton} >
                <div className={classes.checkbox}>
                  <Field 
                  name="terms_conditions" 
                  component={Checkbox}
                  type="checkbox" 
                  color="primary"/>
                </div>
                <div>
                <Fab type="submit" variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                    Register
                </Fab>
                </div>
                <div className={classes.signin}> 
                <Typography>Already have an accout? <Link to="/login">Sign in</Link></Typography>
                </div>
                </div>
                </form>
              </div>
              </div>
            );
          }
}

const WrappedRegisterForm = reduxForm({
    form: "register",
    validate: ({ first_name, last_name, nickname, email, password, terms_conditions }) => {
        const errors = {}

        if (!first_name) {
            errors.first_name = "First name is required!"
        }

        if (!last_name) {
            errors.last_name = "Last name is required!"
        }

        if (!nickname) {
            errors.nickname = "Nickname is required!"
        }

        if (!email) {
            errors.email = "Email is required!"
        }

        if (!password) {
            errors.password = "Password is required!"
        }

        if (!terms_conditions) {
            errors.terms_conditions = "Please confirm your agreement to Terms & Conditions!"
        }

        return errors;
    }
})(withStyles(styles)(RegisterForm))

export default connect(null, {
    setAuthToken
}) (WrappedRegisterForm);