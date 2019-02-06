import React, { Component } from "react";
import NavBar from "../NavBar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    marginTop: "-20px",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    // Photo by Wade Austin Ellis on Unsplash - https://unsplash.com/photos/sf0qE4XehbI
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/wade-austin-ellis-702920-unsplash.jpeg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 2000px rgba(0,0,50,0.5)"
  },
  font: {
    color: theme.palette.primary.contrastText
  }
});

class NotFoundPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar history={this.props.history} />

        <div className={classes.container}>
          <h1 className={classes.font}>Page not found</h1>
          <p className={classes.font}>Try somewhere else challenger</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NotFoundPage);
