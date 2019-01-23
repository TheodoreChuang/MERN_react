import React, { Component } from "react";
import { removeAuthToken, fetchChallenges } from "../../actions";
import { connect } from "react-redux"; 
import YTvideo from "./../components/YTvideo";
import ChallengeCard from "./../components/ChallengeCard";

class ChallengeFeedPage extends Component  {
    constructor(props) {
        console.log("constructor ran");
        super(props);

        const { fetchChallenges } = this.props;
        fetchChallenges();
        console.log(this.props.challenges);

    }

    componentDidMount() {
        console.log("mounted");
        // const { fetchChallenges } = this.props;
        
        // fetchChallenges();
    }

    render() {
        console.log("render")
        const { removeAuthToken, challenges } = this.props;

        return (
                <div>
                    <h2> Challenges Feed </h2>
                    {/* <ChallengeCard /> */}

                    {challenges.map (function(challenge) {
                        return ( 
                            <div key={challenge.title}>
                                <ChallengeCard yt_id={challenge.yt_id} title={challenge.title} description={challenge.description}  date_created={challenge.date_created} /> 
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
