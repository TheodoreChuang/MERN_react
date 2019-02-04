import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentUserAvatar } from "./../../../actions";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Grid, Button } from "@material-ui/core/";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const styles = theme => ({
  container: {
    minWidth: 235,
    maxWidth: 560,
    padding: theme.spacing.unit * 2
  },
  form: {
    marginLeft: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    wrap: "wrap"
  },
  media: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
    border: "2px solid hsl(212, 12%, 72%)"
  },
  typography: {
    textAlign: "center"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    marginBottom: theme.spacing.unit
    // display: "none"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class AvatarUpload extends Component {
  state = {
    file: null
  };

  onSubmit = async event => {
    const { updateCurrentUserAvatar } = this.props;
    event.preventDefault();
    if (this.state.file !== null) {
      const formData = new FormData();
      formData.append("image", this.state.file[0]);

      updateCurrentUserAvatar(formData);
    }
  };

  onChange = event => {
    this.setState({ file: event.target.files });
  };

  render() {
    const { classes, currentUser } = this.props;

    return (
      <Card className={classes.container}>
        <Grid container direction="row" alignItems="center" justify="center">
          <CardMedia
            className={classes.media}
            image={currentUser.profile_image}
            title="Profile Picture"
          />

          <form onSubmit={this.onSubmit} className={classes.form}>
            <input
              accept="image/*"
              label="image"
              className={classes.input}
              type="file"
              onChange={this.onChange}
            />
            <Button raised type="submit">
              Upload Photo <CloudUploadIcon className={classes.rightIcon} />
            </Button>

            {/* 
            FIXME: does not submit
            <input
              accept="image/*"
              label="image"
              className={classes.input}
              id="raised-button-file"
              type="file"
              onChange={this.onChange}
            />
            <label htmlFor="raised-button-file">
              <Button raised component="span" className={classes.button}>
                Upload Photo
              </Button>
              <CloudUploadIcon className={classes.rightIcon}/>
            </label> */}
          </form>
        </Grid>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { updateCurrentUserAvatar }
)(withStyles(styles)(AvatarUpload));
