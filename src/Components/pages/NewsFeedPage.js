import React, { Component } from "react";
import { removeAuthToken, fetchChallenges, fetchSubmissions } from "../../actions";
import { connect } from "react-redux"; 
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from '../NavBar';

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
    dir: PropTypes.string.isRequired,
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
    }
  })

class NewsFeedPage extends Component  {
    constructor(props) {
        console.log("newsfeedpage constr");
        super(props);
        const { fetchChallenges, fetchSubmissions } = this.props;
        fetchChallenges();
        fetchSubmissions();
    }

    componentDidMount() {
        console.log("mounted");
    }

    state = {
        value: 0,
      };

      handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChangeIndex = index => {
        this.setState({ value: index });
      };

    render() {
        console.log("newsfeed page rendered");
        const {challenges, submissions } = this.props;
        const { classes, theme } = this.props;

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
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    >
                    <TabContainer dir={theme.direction}>
                        {submissions && submissions.map (function(submission) {
                            console.log(submission);
                            return ( 
                                <div key={submission._id}>
                                    <ChallengeCard yt_id={submission.yt_id} title={submission.title}  date_created={submission.date_created} id={submission._id} /> 
                                </div>
                            );
                        })}
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        {challenges && challenges.map (function(challenge) {
                            return ( 
                                <div key={challenge._id}>
                                    <ChallengeCard yt_id={challenge.yt_id} title={challenge.title} description={challenge.description}  date_created={challenge.date_created} 
                                    id={challenge._id}/> 
                                </div>
                            );
                        })}
                    </TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        challenges: state.challenges,
        submissions: state.submissions
    };
}

const Wrapped = connect(mapStateToProps, {
    removeAuthToken,
    fetchChallenges,
    fetchSubmissions
})(NewsFeedPage);

export default withStyles(styles, { withTheme: true })(Wrapped);
