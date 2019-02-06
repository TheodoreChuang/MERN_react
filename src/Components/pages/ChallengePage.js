import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Loader from "./../Loader";

const styles = theme => ({
  container: {
    minHeight: "100vh",
    marginTop: "-20px",
    paddingTop: "20px",
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-abstract.png)`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 100vw rgba(255, 255, 255, 0.97)"
  },
  cardContainer: {
    margin: "30px"
  },
  typography: {
    textAlign: "center",
    margin: "30px 0 10px 0",
    color: "grey"
  }
});
class ChallengePage extends Component {
  state = {
    challenges: [],
    loading: true
  };

  async componentDidMount() {
    const response = await LocalApi.get("/challenges");
    this.setState({ challenges: response.data, loading: false   });
  }

  render() {
    const { match, classes } = this.props;

    const { challenges, loading } = this.state;

    // Function to dynamically return specific challenge page off the url params
    const challenge = challenges.find(function(chal) {
      return chal._id === match.params.id;
    });
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
                {challenge && challenge.title}
              </Typography>
              {challenge && (
                <ChallengeCard
                  key={challenge._id}
                  type="challenge"
                  hideMoreDetail={true}
                  id={challenge._id}
                  user_id={challenge.user.creator_id}
                  nickname={challenge.user.nickname}
                  profile_image={challenge.user.profile_image}
                  title={challenge.title}
                  video_url={challenge.video_url}
                  description={challenge.description}
                  date_created={challenge.createdAt}
                />
              )}

              <Typography
                className={classes.typography}
                component="h2"
                variant="h5"
              >
                The Challengers
              </Typography>

              {challenge &&
                challenge.submissions.map(sub => {
                  return (
                    <div key={sub._id}>
                      <ChallengeCard
                        type="submission"
                        hideMoreDetail={true}
                        sub_id={sub._id}
                        nickname={sub.user.nickname}
                        user_id={sub.user.id}
                        profile_image={sub.user.profile_image}
                        title={sub.title}
                        video_url={sub.video_url}
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
