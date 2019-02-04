import React, { Component } from "react";
import NewChallengeForm from "./../forms/NewChallengeForm";
import NavBar from "../NavBar";
import "./NewChallengePage.css";

class NewChallengePage extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="container">
          <h2> New Challenge </h2>
          <NewChallengeForm />
        </div>
      </div>
    );
  }
}

export default NewChallengePage;
