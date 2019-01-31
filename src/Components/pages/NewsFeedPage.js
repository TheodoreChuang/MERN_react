import React, { Component } from "react";
import { connect } from "react-redux";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";

// Materalize
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    direction: "column",
    justify: "center"
  },
  custom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  label: {
    textTransform: "none"
  },
  cardContainer: {
    margin: "20px"
  }
});

class NewsFeedPage extends Component {
  state = {
    value: 0,
    challenges: [],
    submissions: []
  };

  async componentDidMount() {
    console.log("mounted");

    const response1 = await LocalApi.get("/challenges");
    this.setState({ challenges : response1.data });

    const response2 = await LocalApi.get("/challenges");
    this.setState({ submissions : response2.data });    
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { challenges, submissions } = this.state;

    return (
      <div>
        <NavBar />
        <div className={`${classes.root} ${classes.custom}`}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Newsfeed" className={classes.label} />
              <Tab label="Challenges" className={classes.label} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
             {/* submissions feed */}
            <TabContainer dir={theme.direction}>
              {submissions &&
                submissions.map(function(sub) {
                  return (
                    <div
                      key={sub._id}
                      className={classes.cardContainer}
                    >
                      <ChallengeCard
                        id={sub.challenge_id}
                        user_id={sub.submission_user_id}
                        nickname={sub.submission_user_nickname}
                        profile_image={sub.submission_user_profile_image}
                        title={sub.submission_title}
                        yt_id={sub.yt_id}
                        description={sub.submission_description}
                        date_created={sub.submission_createdAt}
                      />
                    </div>
                  );
                })}
            </TabContainer>

            {/* challenges feed */}
            <TabContainer dir={theme.direction}>
              {challenges &&
                challenges.map(function(challenge) {
                  return (
                    <div key={challenge._id} className={classes.cardContainer}>
                      <ChallengeCard
                        id={challenge._id}
                        user_id={challenge.user.creator_id}
                        nickname={challenge.user.nickname}
                        profile_image={challenge.user.profile_image}
                        title={challenge.title}
                        yt_id={challenge.yt_id}
                        description={challenge.description}
                        date_created={challenge.createdAt}
                      />
                    </div>
                  );
                })}
            </TabContainer>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

export default connect(null, {

})(withStyles(styles, { withTheme: true })(withRouter(NewsFeedPage)));
