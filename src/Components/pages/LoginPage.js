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
  logo: {
    marginTop: "60px"
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
        <div className={classes.logo}>
          <img
            src="/images/logo.png"
            height="50px"
            width="50px"
            alt="1Up Logo"
          />
          <Typography className={classes.font} component="h1" variant="h4">
            oneup
          </Typography>
        </div>

        <LoginForm />
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
