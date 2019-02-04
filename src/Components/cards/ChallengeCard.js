import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import SocialShareIcon from "./../icons/SocialShareIcon";
import LocalApi from "./../../apis/local";
import VideoPlayer from "./../VideoPlayer";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  IconButton
} from "@material-ui/core/";
import red from "@material-ui/core/colors/red";
import { MoreVert, Favorite, Delete, Share } from "@material-ui/icons";
import "./ChallengeCard.css";
import moment from "moment";

const styles = theme => ({
  card: {
    // width: "375px",
    // height: "auto"
    minWidth: 275,
    maxWidth: 600
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500],
    border: "2px solid hsl(212, 12%, 72%)"
  }
});


class ChallengeCard extends Component {
  state = {
    expanded: false,
    anchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  dateParser = (string) => {
    const ms = Date.parse(string);
    const formattedDate = moment(ms).format("DD MMM, YYYY");
    
    return formattedDate;
  }

  render() {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const {
      sub_id,
      type,
      classes,
      viewMoreDetail,
      currentUser,
      id,
      user_id,
      nickname,
      profile_image,
      title,
      yt_id,
      description,
      date_created,
      hideMoreDetail,
      history
    } = this.props;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {/* View More Challenge details hidden if currently on specific challenge page */}
        {!hideMoreDetail ? (
          <MenuItem
            component={Link}
            to={`/challenges/${id}`}
            onClick={this.handleMenuClose}
          >
            View More Challenge Details
          </MenuItem>
        ) : null}
        <MenuItem
          component={Link}
          to={`/challenges/${id}/submit`}
          onClick={this.handleMenuClose}
        >
          Join Challenge
        </MenuItem>
      </Menu>
    );

    return (
      <div>
        <Card className={`${classes.card} custom`}>
          <CardHeader
            avatar={
              <Avatar 
                component={Link}
                to={`/profile/${user_id}`}
                aria-label="avatar"
                className={classes.avatar}
              >
                {(profile_image && <img src={profile_image} alt="profile" />) ||
                  "1Up"}
              </Avatar>
            }
            action={
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleProfileMenuOpen}
              >
                <MoreVert />
              </IconButton>
            }
            title={nickname}
            subheader={`Created: ${this.dateParser(date_created)}`}
          />
          <CardContent>
            <Typography component="p">{title}</Typography>
          </CardContent>
            <VideoPlayer url={yt_id} />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>

          <CardActions className={classes.actions} disableActionSpacing>
            {/* <IconButton aria-label="Add to favorites">
              <Favorite />
            </IconButton> */}
            <IconButton aria-label="Share">
              <SocialShareIcon id={id} />
            </IconButton>
            {/* Conditional rendering based on type of card */}
            {/* for challenges */}
            {type === "challenge" && currentUser._id === user_id ? (
            <IconButton aria-label="Delete"
              onClick={() => {
                const r = window.confirm(
                  "Are you sure you want to delete this challenge?"
                );

                if (r === true) {
                  LocalApi.delete(`/challenges/submissions/${id}`)
                    .then(res => window.location.reload())
                    .catch(err => alert(err));
                }
              }}
            >
              <Delete 
              style={{ marginTop: "-5px" }} />
            </IconButton>
            ) : null}
          </CardActions>
        </Card>
        {renderMenu}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(withRouter(ChallengeCard))
);
