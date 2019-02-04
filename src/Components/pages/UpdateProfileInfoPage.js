import React, { Component } from "react";
import NavBar from "../NavBar";
import AvatarUpload from "./../forms/fields/AvatarUpload";
import UpdateProfileInfoForm from "./../forms/UpdateProfileInfoForm";

import { Typography, Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    // Photo by
    backgroundImage: `url(https://freedesignfile.com/upload/2015/05/White-decorative-pattern-vector-background-01.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 2000px rgba(255, 255, 255, 0.90)"
  },
  title: {
    margin: "30px 0px 10px 0px",
    textAlign: "center"
  },
  gridItem: {
    margin: "20px"
  }
});

class UpdateProfileInfoPage extends Component {
  render() {
    const { match, classes } = this.props;

    return (
      <div>
        <NavBar {...this.props} />
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <div className={classes.title}>
                <Typography variant="h4" gutterBottom>
                  Update Profile Information
                </Typography>
              </div>

              <div className={classes.gridItem}>
                <AvatarUpload />
              </div>

              <div className={classes.gridItem}>
                <UpdateProfileInfoForm match={match} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateProfileInfoPage);
