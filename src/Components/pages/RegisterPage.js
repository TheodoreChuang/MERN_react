import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";

class RegisterPage extends Component  {
    render() {
        return (
            <div>
                <h1> Register Page</h1>
                <RegisterForm history={this.props.history}/>
            </div>
        );
    }
}

export default RegisterPage;