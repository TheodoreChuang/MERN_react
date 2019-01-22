import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";
import "./LoginPage.css";

class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <LoginForm history = {this.props.history}/>
            </div>
        );
    }
}

export default LoginPage;