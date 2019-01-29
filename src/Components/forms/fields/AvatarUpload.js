import React, { Component } from "react";
import axios from "axios";

class AvatarUpload extends Component {
  state = {
    file: null
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.file !== null) {
      const formData = new FormData();
      formData.append("image", this.state.file[0]);
      axios
        .post("http://localhost:3000/profile/avatar-upload", formData)
        .then(response => {
          console.log(response);
          // TODO: set user profile image with uploaded image
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  onChange = event => {
    this.setState({ file: event.target.files });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input label="image" type="file" onChange={this.onChange} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default AvatarUpload;
