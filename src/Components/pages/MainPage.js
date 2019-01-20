import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

class MainPage extends Component  {

    render() {
        return (
            <div className="container">
                <h1> oneup </h1>
                <p> Create challenges, share them with your friends and just have fun! </p>
                <div>
                    <div className="center">
                        <button onClick = {
                            () => this.props.history.push("/register")}> Sign up via email
                        </button>
                    </div>
                    <div>
                        <button> Sign up via Facebook </button>
                    </div>
                </div>
                <div>
                    Already have an account?
                        <Link to="/login"> Sign in
                        </Link>
                </div>
            </div>
        );
    }
}

export default MainPage;
