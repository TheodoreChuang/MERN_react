import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

class RegisterPage extends Component  {
    render() {
        return (
            <div className="container">
                <h2> oneup </h2>
                <RegisterForm history={this.props.history}/>
                <div>
                    Already have an account?
                        <Link to="/login"> Sign in
                        </Link>
                </div>
            </div>
        );
    }
}

export default RegisterPage;