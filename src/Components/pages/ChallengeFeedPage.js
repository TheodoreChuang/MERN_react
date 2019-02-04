import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";

import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper
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
        <NavBar {...this.props} />
        <div className={classes.container}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} md={8}>
              {/* challenges feed */}
              {challenges &&
                challenges.map(function(challenge) {
                  console.log(challenges);
                  return (
                    <div className={classes.cardContainer} key={challenge._id}>
                      <ChallengeCard
                          type="challenge"
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
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChallengeFeedPage);
