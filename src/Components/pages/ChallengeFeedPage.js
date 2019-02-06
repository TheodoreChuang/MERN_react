import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.light,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  cardContainer: {
    marginTop: "20px"
  }
});
class ChallengeFeedPage extends Component {
  state = {
    challenges: []
  };

  async componentDidMount() {
    const response = await LocalApi.get("/challenges");
    this.setState({ challenges: response.data });
  }

  render() {
    const { classes } = this.props;
    const { challenges } = this.state;

    return (
      <div>
        <NavBar history={this.props.history} />
        <div className={classes.container}>
          {/* challenges feed */}
          {challenges &&
            challenges.map(function(challenge) {
              return (
                <div key={challenge._id}>
                  <ChallengeCard
                    type="challenge"
                    id={challenge._id}
                    user_id={challenge.user.creator_id}
                    nickname={challenge.user.nickname}
                    profile_image={challenge.user.profile_image}
                    title={challenge.title}
                    video_url={challenge.video_url}
                    description={challenge.description}
                    date_created={challenge.createdAt}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChallengeFeedPage);
