import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";

class NewsFeedPage extends Component {
  state = {
    submissions: []
  };

  async componentDidMount() {
    console.log("mounted");
    const response = await LocalApi.get("/submissions");
    this.setState({ submissions: response.data });
  }

  render() {
    const { submissions } = this.state;
    return (
      <div>
      <NavBar {...this.props}/>
      
        {/* submissions feed */}
        {submissions &&
          submissions.map(function(sub) {
            console.log(submissions);
            return (
              <div key={sub.submission_id}>
                <ChallengeCard
                  type="submission"
                  sub_id={sub.submission_id}
                  id={sub.challenge_id}
                  user_id={sub.submission_user_id}
                  nickname={sub.submission_user_nickname}
                  profile_image={sub.submission_user_profile_image}
                  title={sub.submission_title}
                  yt_id={sub.submission_yt_id}
                  description={sub.submission_description}
                  date_created={sub.submission_createdAt}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default withRouter(NewsFeedPage);
