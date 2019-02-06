import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Input from "./fields/Input";
import { updateCurrentUser } from "./../../actions";

import { Card, Fab, Typography } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import PermIdentity from "@material-ui/icons/PermIdentity";
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
    margin: "30px auto 0 auto",
    position: "center",
    flexDirection: "column",
    justifyContent: "center",
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
    this.props.updateCurrentUser(formValues);
    this.props.history.push("/profile");

    // Action does update but no visual response for user
    // FIXME - handle response both success and failure
    // updateUserFormSubmit = (formValues, dispatch) => {
    //   const { updateCurrentUser, history } = this.props;

    //   updateCurrentUser(formValues)
    //     .then(res => {
    //       console.log(res);
    //       if (res.status === 200) {
    //         swal("Success!", "Details updated!", "success", {
    //           button: false,
    //           timer: 2000
    //         });
    //       }
    //       setTimeout(() => history.push("/profile"), 2000);
    //       dispatch(reset("updateUser"));
    //     })
    //     .catch(err => {
    //       this.setState({ error: true });
    //       return swal(":(", err, "error");
    //     });
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;
    console.log(this.props.currentUser);
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
  form: "updateUser",
  enableReinitialize: true,
  validate: ({ first_name, last_name, nickname, bio, age, location }) => {
    const errors = {};

    if (first_name && first_name.length > 20) {
      errors.first_name = "Must be 20 characters or less";
    }

    if (last_name && last_name.length > 20) {
      errors.last_name = "Must be 20 characters or less";
    }

    if (nickname && nickname.length > 20) {
      errors.nickname = "Must be 20 characters or less";
    }

    if (bio && bio.length > 300) {
      errors.bio = "Must be 300 characters or less";
    }

    if (age && (parseInt(age) < 0 || parseInt(age) > 150)) {
      errors.age = "Must between 0 and 150";
    } else if (age && isNaN(parseInt(age))) {
      errors.age = "Must a number";
    }

    if (location && location.length > 30) {
      errors.location = "Must be 30 characters or less";
    }

    return errors;
  }
})(withStyles(styles)(UpdateProfileInfoForm));

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    initialValues: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    updateCurrentUser
  }
)(withRouter(WrappedUpdateInfoForm));
