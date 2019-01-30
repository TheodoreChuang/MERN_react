import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100vh",
    textTransform: "none",
    textAlign: "center",
    // Photo by Carlos Hevia on Unsplash
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/splash-image.jpeg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  },
  font: {
    color: "white"
  }
});

class LoginPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography className={classes.font} component="h1" variant="h3">
          oneup
        </Typography>
        <LoginForm />
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
