import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";
import "./RegisterPage.css";
class RegisterPage extends Component {
  render() {
    return (
      <div className="container">
        <h2> oneup </h2>
        <RegisterForm history={this.props.history} />
      </div>
    );
  }
}
export default RegisterPage;
