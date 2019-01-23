import React, { Component } from "react";
import { removeAuthToken, fetchChallenges } from "../../actions";
import { connect } from "react-redux"; 
import NavBar from '../components/NavBar';
import ChallengeCard from '../components/ChallengeCard';

class SubmissionFeedPage extends Component  {

    componentDidMount() {
        const { fetchChallenges } = this.props;
        
        fetchChallenges();
    }

    render() {
        const { removeAuthToken } = this.props;

        return (
                <div>
                    <NavBar />
                    <h2>Submission Feed Page</h2>
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
})(SubmissionFeedPage);
