import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";
import { withStyles } from "@material-ui/core/styles";
import Loader from "./../Loader";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.light,
    marginTop: "-20px",
    paddingTop: "20px",
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
    challenges: [],
    loading: true
  };

  async componentDidMount() {
    const response = await LocalApi.get("/challenges");
    this.setState({ challenges: response.data, loading: false });
  }

  render() {
    const { classes } = this.props;
    const { challenges, loading } = this.state;

    return (
      <div>
        <NavBar history={this.props.history} />
        
        {/* Loading animation */}
        <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}> 
          { loading === true && <Loader /> } 
        </div>

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
