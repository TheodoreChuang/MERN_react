import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  },
  button: {
    margin: theme.spacing.unit,
    width: "250px",
    borderRadius: "50px",
    textTransform: "none"
  },
  link: {
    margin: theme.spacing.unit,
    color: "white",
    textDecoration: "none"
  }
});

class LandingPage extends Component {
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

        <Typography className={classes.font} component="h4">
          Create challenges, share them with your friends
          <div> and just have fun!</div>
        </Typography>
        <div>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.props.history.push("/register")}
            >
              Sign up via email
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.props.history.push("/facebook")}
            >
              Sign up via via Facebook
            </Button>
          </div>
        </div>
        <div>
          <Typography className={classes.font} component="caption">
            Already have an account?
            <Link to="/login" className={classes.link}>
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
