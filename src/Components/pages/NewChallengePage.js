import React, { Component } from "react";
import NewChallengeForm from "./../forms/NewChallengeForm";
import NavBar from "../NavBar";

class NewChallengePage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h1> Create New Challenge </h1>
                <NewChallengeForm />
            </div>
            );
        }
}

export default NewChallengePage;
