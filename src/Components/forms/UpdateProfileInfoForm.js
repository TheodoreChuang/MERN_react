import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "./fields/Input";
import { updateCurrentUser } from "./../../actions";
import { withStyles } from "@material-ui/core/styles";
import { Card, Fab, Typography } from "@material-ui/core/";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Email from "@material-ui/icons/Email";
import MyLocationOutlined from "@material-ui/icons/MyLocationOutlined";
import NaturePeopleOutlined from "@material-ui/icons/NaturePeopleOutlined";
import ChildCareOutlined from "@material-ui/icons/ChildCareOutlined";
import FaceOutlined from "@material-ui/icons/FaceOutlined";


const styles = theme => ({
  body: {
    minWidth: 235,
    maxWidth: 560,
    padding: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    margin: "50px auto 0 auto",
    position: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    margin: theme.spacing.unit,
    padding: "6px 0"
  },
  margin: {
    width: "200px"
  },
  checkboxButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  signin: {
    margin: "10px",
    padding: "20px"
  },
  gender: {
    color: "grey",
    margin: "20px",
    fontSize: "40px"
  },
  title: {
    marginBottom: "10px"
  }
});

class UpdateProfileInfoForm extends Component {
  updateUserFormSubmit = formValues => {
    const {
      first_name,
      last_name,
      nickname,
      age,
      location,
      bio,
      gender
    } = formValues;

    this.props.updateCurrentUser(formValues);
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <Card className={classes.body}>
        <div className={classes.container} onSubmit={this.updateUserFormSubmit}>
          <form onSubmit={handleSubmit(this.updateUserFormSubmit.bind(this))}>
            <Field
              startAdornment={<PermIdentity />}
              name="first_name"
              component={Input}
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
              component={Input}
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
              component={Input}
              placeholder="Nickname"
              className={classes.input}
              fullWidth
              inputProps={{
                "aria-label": "Description"
              }}
            />
            <Field
              startAdornment={<ChildCareOutlined />}
              name="age"
              component={Input}
              placeholder="Age"
              className={classes.input}
              fullWidth
              inputProps={{
                "aria-label": "Description"
              }}
            />
            <Field
              startAdornment={<MyLocationOutlined />}
              name="location"
              component={Input}
              placeholder="Location"
              className={classes.input}
              fullWidth
              inputProps={{
                "aria-label": "Description"
              }}
            />
            <Field
              startAdornment={<NaturePeopleOutlined />}
              name="bio"
              component={Input}
              id="outlined-textarea"
              label="Bio"
              placeholder="Bio"
              multiline
              className={classes.textField}
              variant="outlined"
            />
            <div className={classes.gender}>
              <div className={classes.title}>
                <Typography color="inherit">Gender</Typography>
              </div>
              <div>
                <Typography color="inherit">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="male"
                  />{" "}
                  Male
                </Typography>
                <Typography color="inherit">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                  />{" "}
                  Female
                </Typography>
                <Typography color="inherit">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="gender-neutral"
                  />{" "}
                  Gender-neutral
                </Typography>
              </div>
            </div>
            <div className={classes.checkboxButton}>
              <div>
                <Fab
                  type="submit"
                  variant="extended"
                  color="primary"
                  aria-label="Add"
                  className={classes.margin}
                >
                  Update
                </Fab>
              </div>
            </div>
          </form>
        </div>
      </Card>
    );
  }
}

const WrappedUpdateInfoForm = reduxForm({
  form: "register",
  validate: ({ first_name }) => {
    const errors = {};

    // if (!first_name) {
    //   errors.first_name = "First name is required!";
    // }

    // if (!last_name) {
    //     errors.last_name = "Last name is required!"
    // }

    // if (!nickname) {
    //     errors.nickname = "Nickname is required!"
    // }

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
})(withStyles(styles)(UpdateProfileInfoForm));

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    updateCurrentUser
  }
)(WrappedUpdateInfoForm);
