import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions";
import NavBar from "./../NavBar";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import ChallengeCard from "./../cards/ChallengeCard";

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

class ProfileCurrentPage extends Component {
  constructor(props) {
    super(props);
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    const { classes, user } = this.props;
    console.log(user.submissions);

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
            <Grid item xs={0} md={2} />
            <Grid item xs={12} md={8}>
              <div className={classes.cardContainer}>
                <ProfileInfoCard {...user} />
              </div>

              <Typography className={classes.typography} variant="h5">
                completed{" "}
                {(user && user.submissions && user.submissions.length) || 0}{" "}
                challenges
              </Typography>

              {user &&
                user.submissions &&
                user.submissions.map(submission => {
                  return (
                    <div key={submission._id} className={classes.cardContainer}>
                      <ChallengeCard
                        id={submission.challengeId}
                        user_id={user._id}
                        nickname="You"
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
            <Grid item xs={0} md={2} />
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};

const Wrapped = connect(
  mapStateToProps,
  {
    getCurrentUser
  }
)(ProfileCurrentPage);

export default withStyles(styles)(Wrapped);
