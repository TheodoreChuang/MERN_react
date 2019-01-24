import React, { Component } from "react";
import SubmissionForm from "./../forms/SubmissionForm";

class SubmissionPage extends Component {

    render() {
        const { match } = this.props;
        console.log("rendered");
        return (
            <div>
                <h1> Submit Challenge </h1>
                <SubmissionForm match={match}/>
            </div>
            );
        }
}

export default SubmissionPage;
