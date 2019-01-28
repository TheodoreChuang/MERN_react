import React, { Component } from "react";
import NavBar from "./../NavBar";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import ChallengeCard from "./../cards/ChallengeCard";
import LocalApi from "./../../apis/local";

import "./../App.css";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  },
  cardContainer: {
    margin: "30px"
  },
  typography: {
    textAlign: "center",
    margin: "30px"
  }
});

class ProfilePage extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    console.log("Profile Page did mount");
    this.getUser();
  }

  getUser = async () => {
    const { match } = this.props;
    try {
      const response = await LocalApi.get(`/profile/${match.params.id}`);
      this.setState({ user: response.data });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    const { classes } = this.props;
    const { user } = this.state;

    return (
      <div>
        <NavBar />
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={3} />
            <Grid item xs={6}>
              <div className={classes.cardContainer}>
                <ProfileInfoCard {...user} />
              </div>

              <Typography className={classes.typography} variant="h5">
                completed {(user && user.submissions.length) || 0} challenges
              </Typography>

              {user &&
                user.submissions.map(submission => {
                  return (
                    <div key={submission._id} className={classes.cardContainer}>
                      <ChallengeCard
                        id={submission.challengeId}
                        user_id={user._id}
                        nickname={user.nickname}
                        profile_image={user.profile_image}
                        title={submission.challengeTitle}
                        yt_id={submission.yt_id}
                        description={submission.description}
                        date_created={submission.createdAt}
                      />
                    </div>
                  );
                })}
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProfilePage);
