import React, { Component } from "react";
import UpdateProfileInfoForm from "./../forms/UpdateProfileInfoForm";
import NavBar from "../NavBar";

class UpdateProfileInfoPage extends Component {
  render() {
    const { match } = this.props;
    console.log("rendered");
    return (
      <div>
        <NavBar {...this.props} />
        {/* <h1> Update Profile Information </h1> */}
        <UpdateProfileInfoForm match={match} />
      </div>
    );
  }
}

export default UpdateProfileInfoPage;
