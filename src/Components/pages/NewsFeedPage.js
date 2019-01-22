import React, { Component } from "react";
import { removeAuthToken } from "./../../actions";
import { connect } from "react-redux"; 
import NavBar from '../components/NavBar';
import ChallengeCard from '../components/ChallengeCard';

class NewsFeedPage extends Component  {

    render() {
        const { removeAuthToken } = this.props;

        return (
            <div>
                <div className="container">
                    <h1> News Feed</h1>
                    <button onClick={() => {
                        removeAuthToken();
                    }}> Logout </button>
                </div>
            
                <div>
                    <NavBar />
                    <div className="challenge_card">
                    <ChallengeCard />
                    </div>
                    <div className="challenge_card">
                    <ChallengeCard />
                    </div>
                    <div class="challenge_card">
                    <ChallengeCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    removeAuthToken
})(NewsFeedPage);
