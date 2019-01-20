import React, { Component } from "react";
import { removeAuthToken } from "./../../actions";
import { connect } from "react-redux"; 
import NavBar from '../components/NavBar';
import ChallengeCard from '../components/ChallengeCard';

class NewsFeedPage extends Component  {

    render() {
        const { removeAuthToken } = this.props;

        return (
            <div className="container">
                <h1> News Feed</h1>
                <button onClick={() => {
                    removeAuthToken();
                }}> Logout </button>
            
            <div>
                <div>
                    <NavBar />
                    <div class="challenge_card">
                    <ChallengeCard />
                    </div>
                    <div class="challenge_card">
                    <ChallengeCard />
                    <div class="challenge_card">
                    <ChallengeCard />
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default NewsFeedPage;

// export default connect(null, {
//     removeAuthToken
// })(NewsFeedPage);

// </div>
// <h1> News Feed</h1>
// <button onClick={() => {
//     removeAuthToken();
// }}> Logout </button>
// </div>
