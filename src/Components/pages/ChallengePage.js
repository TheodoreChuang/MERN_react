import React, { Component } from "react";
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

        // Function to dynamically return specific challenge page off the url params
        const challenge = challenges.find(function(chal) {
            return (parseInt(chal._id) === parseInt(match.params.id));
        });
        return (
            <div>
                <NavBar />
                <h2> Specific Challenge Page </h2>
                {challenge && 
                    <ChallengeCard 
                    viewMoreDetail={false}
                    user_id={challenge.user.creator_id}
                    nickname={challenge.user.nickname}
                    profile_image={challenge.user.profile_image}
                    title={challenge.title}
                    yt_id={challenge.yt_id}
                    description={challenge.description}
                    date_created={challenge.createdAt}
                /> }
                
                <h2> Specific Challenge Submissions </h2>
                {challenge && 
                    challenge.submissions.map((sub) => {
                        return (
                            <div key={sub.yt_id}>
                                <ChallengeCard 
                                viewMoreDetail={false}
                                nickname={sub.user.nickname}
                                user_id={sub.user.id} 
                                profile_image={sub.user.profile_image}
                                title={sub.title}
                                yt_id={sub.yt_id}
                                description={sub.description}
                                date_created={sub.createdAt}
                                />
                            </div>
                        )
                })}
            </div>
        );
    }
}

export default ChallengePage;
