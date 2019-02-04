import React, { Component } from "react";
import SubmissionForm from "./../forms/SubmissionForm";
import NavBar from "../NavBar";

import { withStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";

const styles = theme => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-white-abstract.jpg)`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.90)"
  },
  card: {
    minWidth: 360,
    maxWidth: 600,
    marginTop: "15vh",
    padding: theme.spacing.unit * 4
  },
  title: {
    textAlign: "center"
  }
});
class SubmissionPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar {...this.props} />
        <div className={classes.container}>
          <Card className={classes.card}>
            <Typography
              component="h1"
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Join The Challenge
            </Typography>
            <SubmissionForm />
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SubmissionPage);
