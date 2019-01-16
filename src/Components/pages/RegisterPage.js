import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";

class RegisterPage extends Component  {
    render() {
        return (
            <div>
                <h1> Register Page</h1>
                <RegisterForm />
            </div>
        );
    }
}

export default RegisterPage;