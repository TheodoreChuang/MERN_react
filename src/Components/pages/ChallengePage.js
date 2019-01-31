import React, { Component } from "react";
import { connect } from "react-redux"; 
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";

class ChallengePage extends Component  {
    state = { 
        challenges: [] 
    }

    async componentDidMount() {
        const response = await LocalApi.get("/challenges");
        this.setState({ challenges : response.data });
    }

    render() {
        const { match } = this.props;
        const { challenges } = this.state;

        const challenge = challenges.find(function(element) {
            return (parseInt(element._id) === parseInt(match.params.id));
        });
        return (
            <div>
                <NavBar />
                <h2> Specific Challenge Page </h2>
                <ChallengeCard {...challenge} />
                <h2> Specific Challenge Submissions </h2>
                {challenge && challenge.submissions.map((element) => {
                    return (
                        <div key={challenge._id}>
                            <ChallengeCard yt_id={element.yt_id} />
                        </div>
                    )
                })}
            </div>
        );
    }
}


export default ChallengePage;
