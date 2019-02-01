import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";

class ChallengeFeedPage extends Component {
  state = {
    challenges: []
  };

  async componentDidMount() {
    const response1 = await LocalApi.get("/challenges");
    this.setState({ challenges: response1.data });
  }

  render() {
    const { challenges } = this.state;
    return (
      <div>
        <NavBar {...this.props} />
        {/* challenge feed */}
        {challenges &&
          challenges.map(function(challenge) {
            return (
              <div key={challenge._id}>
                <ChallengeCard
                  is_challenge={true}
                  id={challenge._id}
                  user_id={challenge.user.creator_id}
                  nickname={challenge.user.nickname}
                  profile_image={challenge.user.profile_image}
                  title={challenge.title}
                  yt_id={challenge.yt_id}
                  description={challenge.description}
                  date_created={challenge.createdAt}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default ChallengeFeedPage;
