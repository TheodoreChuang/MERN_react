import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100vh",
    textTransform: "none",
    textAlign: "center",
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-auth.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 100vw rgba(0, 0, 0, 0.70)"
  },
  logo: {
    marginTop: "10px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px"
    }
  },
  font: {
    color: theme.palette.primary.contrastText
  }
});

class RegisterPage extends Component {
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

        <RegisterForm history={this.props.history} />
      </div>
    );
  }
}

export default withStyles(styles)(RegisterPage);
