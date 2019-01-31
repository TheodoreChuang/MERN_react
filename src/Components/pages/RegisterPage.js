import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";
import "./RegisterPage.css";
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
  },
  button: {
    margin: theme.spacing.unit,
    width: "250px",
    borderRadius: "50px",
    textTransform: "none"
  }
});

class RegisterPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography className={classes.font} component="h1" variant="h3">
          oneup
        </Typography>
        <RegisterForm history={this.props.history} />
      </div>
    );
  }
}

export default withStyles(styles)(RegisterPage);
