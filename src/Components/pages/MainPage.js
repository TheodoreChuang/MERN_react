import React, { Component } from "react";

class MainPage extends Component  {

    render() {
        return (
            <div>
                <h1> Main Page</h1>
                <button onClick = {
                    () => this.props.history.push("/register")}> Sign up via email</button>
                <button> Sign up via Facebook </button>

                <div>
                    <button onClick={
                        () => this.props.history.push("/login")}> Already have an account? Log in
                    </button>
                </div>
            </div>
        );
    }
}

export default MainPage;
