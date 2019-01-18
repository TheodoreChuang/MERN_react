import React, { Component } from "react";
import { removeAuthToken } from "./../../actions";
import { connect } from "react-redux"; 

class NewsFeedPage extends Component  {

    render() {
        const { removeAuthToken } = this.props;

        return (
            <div className="container">
                <h1> News Feed</h1>
                <button onClick={() => {
                    removeAuthToken();
                }}> Logout </button>
            </div>
        );
    }
}

export default connect(null, {
    removeAuthToken
})(NewsFeedPage);
