import React, { Component } from "react";
import NewChallengeForm from "./../forms/NewChallengeForm";

class NewChallengePage extends Component {

    render() {
        return (
            <div>
                <h1> Create New Challenge </h1>
                <NewChallengeForm />
            </div>
            );
        }
}

export default NewChallengePage;
