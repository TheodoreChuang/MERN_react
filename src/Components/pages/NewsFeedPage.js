import React, { Component } from "react";
import { removeAuthToken } from "./../../actions";
import { connect } from "react-redux"; 
import NavBar from '../components/NavBar';
import ChallengeCard from '../components/ChallengeCard';

class NewsFeedPage extends Component  {

    componentDidMount() {
        const { fetchChallenges } = this.props;
        fetchChallenges();
    }

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
                    <div class="challenge_card">
                    <ChallengeCard />
                    </div>
                </div>
            // </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        challenges: state.challenges
    };
}

export default connect(mapStateToProps, {
    removeAuthToken,
    fetchChallenges
})(NewsFeedPage);
