import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentUserAvatar } from "./../../../actions";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core/";

const styles = theme => ({
  card: {
    minWidth: 235,
    maxWidth: 560,
    padding: "20px"
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
      <Card>
        <CardContent className={classes.card}>
          <CardMedia
            className={classes.media}
            image={currentUser.profile_image}
            title="Profile Picture"
          />
          <img src={currentUser.profile_image} className={classes.media} />

          <form onSubmit={this.onSubmit}>
            <input label="image" type="file" onChange={this.onChange} />
            <button type="submit">Send</button>
          </form>
        </CardContent>
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
