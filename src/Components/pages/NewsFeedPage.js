import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";
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
class NewsFeedPage extends Component {
  state = {
    submissions: [],
    loading: true
  };

  async componentDidMount() {
    const response = await LocalApi.get("/submissions");
    this.setState({ submissions: response.data, loading: false });
  }

  render() {
    const { classes } = this.props;
    const { submissions, loading } = this.state;

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
          {/* submissions feed */}
          {submissions &&
            submissions.map(function(sub) {
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
                    video_url={sub.submission_video_url}
                    description={sub.submission_description}
                    date_created={sub.submission_createdAt}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(NewsFeedPage));
