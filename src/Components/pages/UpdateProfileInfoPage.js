import React, { Component } from "react";
import NavBar from "../NavBar";
import AvatarUpload from "./../forms/fields/AvatarUpload";
import UpdateProfileInfoForm from "./../forms/UpdateProfileInfoForm";

import { Typography } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    margin: "50px auto 0 auto",
    position: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginBottom: "10px"
  }
});

class UpdateProfileInfoPage extends Component {
  render() {
    const { match, classes } = this.props;

    return (
      <div>
        <NavBar {...this.props} />
        <div className={classes.container}>
          <div className={classes.title}>
            <Typography variant="h4" gutterBottom>
              Update Profile Information
            </Typography>
          </div>

          <AvatarUpload />

          <UpdateProfileInfoForm match={match} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateProfileInfoPage);
