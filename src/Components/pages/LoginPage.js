import React, { Component } from "react";

class LoginPage extends Component  {

    onLogInClick() {
    }

    render() {
        return (
            <div>
                <h1> Login Page</h1>
                {/* <LoginForm /> */}
                <button onClick = { 
                    () => this.onSignUpClick()
                }> Sign up via email </button>
                <button> Sign up via Facebook </button>

                <div>Already have an account? Sign In</div>
            </div>
        );
    }
}

export default LoginPage;
