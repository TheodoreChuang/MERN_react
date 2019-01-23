import React, { Component } from "react";
import { removeAuthToken, fetchChallenges } from "../../actions";
import { connect } from "react-redux"; 
import ChallengeCard from "./../components/ChallengeCard";

class ChallengeFeedPage extends Component  {
    constructor(props) {
        super(props);
        const { fetchChallenges } = this.props;

        fetchChallenges();
    }

    render() {
        console.log("rendered");
        const {challenges } = this.props;

        return (
                <div>
                    <h2> Challenges Feed </h2>
                    {/* <ChallengeCard /> */}

                    {challenges.map (function(challenge) {
                        return ( 
                            <div key={challenge.title}>
                                <ChallengeCard yt_id={challenge.yt_id} title={challenge.title} description={challenge.description}  date_created={challenge.date_created} 
                                id={challenge.id}/> 
                            </div>
                            );
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
})(ChallengeFeedPage);
