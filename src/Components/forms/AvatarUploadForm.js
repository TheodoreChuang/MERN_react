import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentUserAvatar } from "../../actions";
import { randomEmojis } from "../../data/emoji";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Grid, Button, Typography } from "@material-ui/core/";
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
    wrap: "wrap",
    color: "grey"
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
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  fileError: { color: theme.palette.secondary.dark }
});

class AvatarUploadForm extends Component {
  state = {
    file: null,
    fileError: false
  };

  onSubmit = async event => {
    const { updateCurrentUserAvatar } = this.props;
    event.preventDefault();
    if (this.state.file !== null) {
      const formData = new FormData();
      formData.append("image", this.state.file[0]);

      updateCurrentUserAvatar(formData);
      event.target.querySelector("input").value = null;
      this.setState({ fileError: false });
    }
    if (this.state.file === null) {
      this.setState({ fileError: true });
    }
  };

  onChange = event => {
    this.setState({ file: event.target.files });
  };

  render() {
    const { classes, currentUser } = this.props;
    const { fileError } = this.state;

    return (
      <Card className={classes.container}>
        <Grid container direction="row" alignItems="center" justify="center">
          {/* Current Profile Photo */}
          <CardMedia
            className={classes.media}
            image={
              currentUser.profile_image ||
              randomEmojis[Math.floor(Math.random() * randomEmojis.length)]
            }
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

            {/* Error - if submit and no file chosen */}
            {fileError ? (
              <Typography variant="caption" className={classes.fileError}>
                No image was selected for upload
              </Typography>
            ) : null}

            <Button style={{ textTransform: "none" }} type="submit">
              Upload Photo <CloudUploadIcon className={classes.rightIcon} />
            </Button>
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
)(withStyles(styles)(AvatarUploadForm));
