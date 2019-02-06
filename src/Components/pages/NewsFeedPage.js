import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.light,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardContainer: {
    marginTop: "20px"
  }
});
class NewsFeedPage extends Component {
  state = {
    submissions: []
  };

  async componentDidMount() {
    const response = await LocalApi.get("/submissions");
    this.setState({ submissions: response.data });
  }

  render() {
    const { classes } = this.props;
    const { submissions } = this.state;

    return (
      <div>
        <NavBar history={this.props.history} />
        <div className={classes.container}>
          {/* submissions feed */}
          {submissions &&
            submissions.map(function(sub) {
              return (
                <div key={sub.submission_id} className={classes.cardContainer}>
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
