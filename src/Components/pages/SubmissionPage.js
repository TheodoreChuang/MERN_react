import React, { Component } from "react";
import SubmissionForm from "./../forms/SubmissionForm";
import NavBar from "../NavBar";

class SubmissionPage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div
                style={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", flexDirection:"column"}}>
                    <SubmissionForm/>
                </div>
            </div>
            );
        }
}

export default SubmissionPage;
