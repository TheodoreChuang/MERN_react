import React, { Component } from "react";
import NavBar from "../NavBar";
import AvatarUploadForm from "../forms/AvatarUploadForm";
import ChangePasswordForm from "./../forms/ChangePasswordForm";
import UpdateProfileInfoForm from "./../forms/UpdateProfileInfoForm";
import { Typography, Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-abstract.png)`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.97)"
  },
  title: {
    margin: "30px 0px 10px 0px",
    textAlign: "center"
  },
  gridItem: {
    margin: "20px"
  },
  typography: {
    textAlign: "center",
    margin: "30px 0 10px 0",
    color: "grey"
  }
});

class UpdateProfileInfoPage extends Component {
  render() {
    const { match, classes } = this.props;

    return (
      <div>
        <NavBar history={this.props.history} />
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <div className={classes.title}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.typography}
                >
                  Update Your Profile
                </Typography>
              </div>

              <div className={classes.gridItem}>
                <AvatarUploadForm />
              </div>

              <div className={classes.gridItem}>
                <ChangePasswordForm />
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
