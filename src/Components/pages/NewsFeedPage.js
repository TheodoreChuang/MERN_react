import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    // flexGrow: 1,
    // margin: "0px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid grey"
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
        <NavBar {...this.props} />
        <div className={classes.container}>
          {/* submissions feed */}
          {submissions &&
            submissions.map(function(sub) {
              console.log(submissions);
              return (
                <div
                  key={sub.submission_id}
                  className={classes.cardContainer}
                >
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
      </div>
    );
  }
}

// export default withRouter(NewsFeedPage);
export default withStyles(styles)(withRouter(NewsFeedPage));
