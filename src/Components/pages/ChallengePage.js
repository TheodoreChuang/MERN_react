import React, { Component } from "react";
import { removeAuthToken, fetchChallenges } from "../../actions";
import { connect } from "react-redux"; 
import ChallengeCard from "./../components/ChallengeCard";

class ChallengePage extends Component  {
    constructor(props) {
        super(props);
        const { fetchChallenges } = this.props;

        fetchChallenges();
    }

    render() {
        const { match, challenges } = this.props;

        const challenge = challenges.find(function(element) {
            return element.id === parseInt(match.params.id);
        });

        return (
            <div>
                <h2> Specific Challenge Page </h2>
                <ChallengeCard {...challenge} />
                <h2> Specific Challenge Submissions </h2>
                {console.log(challenge.submissions)}
                {challenge.submissions.map((element) => {
                    return (
                        <div>
                            <ChallengeCard yt_id={element} />
                        </div>
                    )
                })}
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
})(ChallengePage);
