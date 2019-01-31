import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import LocalApi from "../../apis/local";
import { setAuthToken } from "./../../actions";
import { connect } from "react-redux";

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
    gender: {
      color: 'grey',
      margin: '20px',
      fontSize: '40px',
    },
    title: {
      marginBottom: '10px'
    },
  });

class UpdateProfileInfoForm extends Component {
    
    updateUserFormSubmit = (formValues) => {
        const { first_name, last_name, nickname } = formValues;
        const { setAuthToken } = this.props;

        LocalApi.patch("/profile", {first_name, last_name, nickname})
        .then(response => {
            //acquring token
            // setAuthToken(response.data.token);
            //redirect
            //this.props.history.push("/profile");
        })
        .catch(err => console.log(err));
        }

        render() {
            const { classes } = this.props;
            const { handleSubmit } = this.props;
            
            return (
            <div className={classes.body}>
              <div className={classes.container} onSubmit = {this.updateUserFormSubmit}>
                <div className={classes.title}>
                 <Typography variant="h4" gutterBottom >Update Profile Information</Typography>
                </div>
                <form onSubmit = {handleSubmit(this.updateUserFormSubmit)}>
                <Field
                  name="first_name"
                  component={Input}
                  placeholder="First Name"
                  className={classes.input}
                  fullWidth
                  value
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
                  name="age"
                  component={Input}
                  placeholder="Age"
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Field
                  name="location"
                  component={Input}
                  placeholder="Location"
                  className={classes.input}
                  fullWidth
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Field
                  name="bio"
                  component={Input}
                  id="outlined-textarea"
                  label="Bio"
                  placeholder="Bio"
                  multiline
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <div className={classes.gender}>
                <div className={classes.title}>
                <Typography color="inherit">Gender</Typography>
                </div>
                <div>
                  <Typography color="inherit">
                    <Field
                      name="sex"
                      component="input"
                      type="radio"
                      value="male"
                    />{' '}
                    Male
                  </Typography>
                  <Typography color="inherit">
                    <Field
                      name="sex"
                      component="input"
                      type="radio"
                      value="female"
                    />{' '}
                    Female
                    </Typography>
                    <Typography color="inherit">
                    <Field
                      name="sex"
                      component="input"
                      type="radio"
                      value="Rather not say"
                    />{' '}
                    Rather not say
                    </Typography>
                </div>
            </div>
                <div className={classes.checkboxButton} >
                
                <div>
                <Fab type="submit" variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                    Update
                </Fab>
                </div>
                
                </div>

                </form>
              </div>
              </div>
            );
          }
}


const WrappedUpdateInfoForm = reduxForm({
    form: "register",
    validate: ({ first_name, last_name, nickname }) => {
        const errors = {}

        if (!first_name) {
            errors.first_name = "Required!"
        }

        if (!last_name) {
            errors.last_name = "Required!"
        }

        if (!nickname) {
            errors.nickname = "Required!"
        }

        // if (!email) {
        //     errors.email = "Email is required!"
        // }

        // if (!password) {
        //     errors.password = "Password is required!"
        // }

        // if (!terms_conditions) {
        //     errors.terms_conditions = "Please confirm your agreement to Terms & Conditions!"
        // }

        return errors;
    }

})(withStyles(styles)(UpdateProfileInfoForm))


export default connect(null, {
    setAuthToken
})(WrappedUpdateInfoForm);
