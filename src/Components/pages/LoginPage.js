import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";
import "./LoginPage.css";

class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <h2> oneup </h2>
                <LoginForm history = {this.props.history}/>
            </div>
        );
    }
}

export default LoginPage;