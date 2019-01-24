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
                    <NavBar />
                    <div className="challenge_card">
                    <ChallengeCard />
                    </div>
                    <div className="challenge_card">
                    <ChallengeCard />
                    </div>
                    <div className="challenge_card">
                    <ChallengeCard />
                    </div>
                </div>
        );
    }
}

export default connect(null, {
    removeAuthToken
})(NewsFeedPage);
