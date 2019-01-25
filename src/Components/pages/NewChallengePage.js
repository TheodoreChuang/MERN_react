import React, { Component } from "react";
import NewChallengeForm from "./../forms/NewChallengeForm";
import NavBar from "../NavBar";
import "./NewChallengePage.js"

class NewChallengePage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1> Create New Challenge </h1>
                    <NewChallengeForm />
                </div>
            </div>
            );
        }
}

export default NewChallengePage;
