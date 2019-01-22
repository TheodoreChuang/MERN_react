import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";

class RegisterPage extends Component  {
    render() {
        return (
            <div>
                <RegisterForm history={this.props.history}/>
            </div>
        );
    }
}

export default RegisterPage;