import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions";
import NavBar from "./../NavBar";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import ChallengeCard from "./../cards/ChallengeCard";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Loader from "./../Loader";

const styles = theme => ({
  container: {
    minHeight: "100vh",
    // margin: "-20px 0px 0px -2vw",
    paddingTop: "20px",
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-abstract.png)`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 100vw rgba(255, 255, 255, 0.97)"
  },
  profileContainer: {
    margin: "20px"
  },
  subsContainer: {
    margin: "20px 20px 20px 1vw"
  },
  typography: {
    textAlign: "center",
    margin: "30px",
    color: "grey"
  }
});

class ProfileCurrentPage extends Component {
  constructor(props) {
    super(props);
    const { getCurrentUser } = this.props;
    getCurrentUser()
    .then(res => this.setState({ loading: false }))
  }

  state = {
    loading: true
  };

  render() {
    const { classes, user } = this.props;
    const { loading } = this.state;

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
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12} md={8}>
              <div className={classes.profileContainer}>
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
                    <div key={submission._id} className={classes.subsContainer}>
                      <ChallengeCard
                        user_sub_id={user}
                        type="submission"
                        id={submission.challengeId}
                        sub_id={submission._id}
                        user_id={user._id}
                        nickname="You"
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
