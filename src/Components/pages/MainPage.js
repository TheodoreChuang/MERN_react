import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component  {

    render() {
        return (
            <div>
                <h1> oneup </h1>
                <button onClick = {
                    () => this.props.history.push("/register")}> Sign up via email</button>
                <button> Sign up via Facebook </button>

                <div>
                Already have an account?
                    <Link to="/login"> Log In
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainPage;
