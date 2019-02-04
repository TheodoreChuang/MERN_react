import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    minHeight: "100vh",
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-white-abstract.jpg)`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.90)"
  },
  cardContainer: {
    margin: "30px"
  },
  typography: {
    textAlign: "center",
    marginTop: "30px",
    color: "grey"
  },
  typographyBG: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "40%",
    padding: theme.spacing.unit * 2
  }
});
class ChallengePage extends Component {
  state = {
    challenges: []
  };

  async componentDidMount() {
    const response = await LocalApi.get("/challenges");
    this.setState({ challenges: response.data });
  }

  render() {
    const { match, classes } = this.props;
    const { challenges } = this.state;

    // Function to dynamically return specific challenge page off the url params
    const challenge = challenges.find(function(chal) {
      return parseInt(chal._id) === parseInt(match.params.id);
    });
    return (
      <div>
        <NavBar {...this.props} />
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <Typography
                component="h1"
                variant="h5"
                gutterBottom
                className={classes.typography}
              >
                <span className={classes.typographyBG}>
                  {challenge && challenge.title} Challenge
                </span>
              </Typography>
              {challenge && (
                <ChallengeCard
                  type="challenge"
                  hideMoreDetail={true}
                  id={challenge._id}
                  user_id={challenge.user.creator_id}
                  nickname={challenge.user.nickname}
                  profile_image={challenge.user.profile_image}
                  title={challenge.title}
                  yt_id={challenge.yt_id}
                  description={challenge.description}
                  date_created={challenge.createdAt}
                />
              )}

              <Typography
                component="h1"
                variant="h5"
                gutterBottom
                className={classes.typography}
              >
                <span className={classes.typographyBG}>The Challengers</span>
              </Typography>
              {challenge &&
                challenge.submissions.map(sub => {
                  return (
                    <div key={sub.yt_id}>
                      <ChallengeCard
                        type="submission"
                        hideMoreDetail={true}
                        sub_id={sub._id}
                        nickname={sub.user.nickname}
                        user_id={sub.user.id}
                        profile_image={sub.user.profile_image}
                        title={sub.title}
                        yt_id={sub.yt_id}
                        description={sub.description}
                        date_created={sub.createdAt}
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

export default withStyles(styles)(ChallengePage);
