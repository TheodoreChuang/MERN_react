import React, { Component } from "react";
import SubmissionForm from "./../forms/SubmissionForm";
import NavBar from "../components/NavBar";

class SubmissionPage extends Component {

    render() {
        return (
            <div>
                {/* <NavBar /> */}
                <h1> Submit Challenge </h1>
                <SubmissionForm />
            </div>
            );
        }
}

export default SubmissionPage;
