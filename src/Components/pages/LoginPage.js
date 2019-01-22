import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginForm history = {this.props.history}/>
            </div>
        );
    }
}

export default LoginPage;