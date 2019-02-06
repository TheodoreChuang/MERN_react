import React, { Component } from "react";
import NavBar from "./../NavBar";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import ChallengeCard from "./../cards/ChallengeCard";
import LocalApi from "./../../apis/local";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    minHeight: "100vh",
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-abstract.png)`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.97)"
  },
  cardContainer: {
    margin: "30px"
  },
  typography: {
    textAlign: "center",
    marginTop: "30px",
    color: "grey"
  }
});

class ProfilePage extends Component {
  state = {
    user: null
  };

  componentDidMount() {
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
        <NavBar history={this.props.history} />
        <div className={classes.container}>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12} md={8}>
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
                        video_url={submission.video_url}
                        description={submission.description}
                        date_created={submission.createdAt}
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

export default withStyles(styles)(ProfilePage);
