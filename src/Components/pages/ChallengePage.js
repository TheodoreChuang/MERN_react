import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthToken, fetchChallenges } from "../../actions";

import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper
  },
  typography: {
    textAlign: "center",
    margin: "30px auto"
  }
});

class ChallengePage extends Component {
  constructor(props) {
    super(props);
    const { fetchChallenges } = this.props;

    fetchChallenges();
  }

  render() {
    const { match, classes, challenges } = this.props;

    const challenge = challenges.find(function(element) {
      return parseInt(element._id) === parseInt(match.params.id);
    });
    return (
      <div>
        <NavBar {...this.props} />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography className={classes.typography} variant="h5">
              {challenge && challenge.title}
            </Typography>

            <ChallengeCard {...challenge} />

            <Typography className={classes.typography} variant="h5">
              {(challenge && challenge.submissions.length) || 0} completed times
            </Typography>

            {challenge &&
              challenge.submissions.map(element => {
                return (
                  <div>
                    <ChallengeCard yt_id={element.yt_id} />
                  </div>
                );
              })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    challenges: state.challenges
  };
};

const Wrapped = connect(
  mapStateToProps,
  {
    removeAuthToken,
    fetchChallenges
  }
)(ChallengePage);

export default withStyles(styles)(Wrapped);
