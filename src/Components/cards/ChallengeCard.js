import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SocialShareIcon from "./../icons/SocialShareIcon";
import LocalApi from "./../../apis/local";
import VideoPlayer from "./../VideoPlayer";
import moment from "moment";
import swal from "sweetalert";
import { randomEmojis } from "./../../data/emoji";
import "./ChallengeCard.css";

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
import { MoreVert, Favorite, Delete } from "@material-ui/icons";
import "./ChallengeCard.css";

const styles = theme => ({
  card: {
    // width: "375px",
    // height: "auto"
    // minWidth: 275,
    // maxWidth: 600
    // width: "80vw",
  },
  header: {
    borderBottom: "1px solid hsl(212, 12%, 72%)",
    padding: `${theme.spacing.unit * 2}px 0px`
  },
  avatar: {
    border: "1px solid hsl(212, 12%, 72%)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  text: {
    padding: `${theme.spacing.unit * 0.5}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 0.5}px ${theme.spacing.unit * 2}px`
  },
  actions: {
    padding: `${theme.spacing.unit}px 0px`
  },
  actionButton: {
    padding: `${theme.spacing.unit}px`
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

  // Function to parse raw date data from database to a readable format
  dateParser = string => {
    const ms = Date.parse(string);
    const formattedDate = moment(ms).format("DD MMM, YYYY");

    return formattedDate;
  };

  render() {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const {
      type,
      classes,
      currentUser,
      id,
      user_id,
      nickname,
      profile_image,
      title,
      video_url,
      description,
      date_created,
      hideMoreDetail
    } = this.props;
    const currentPath = window.location.pathname;

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
        <Card className={"custom"}>
          <CardHeader
            className={classes.header}
            avatar={
              <Avatar
                component={Link}
                to={`/profile/${user_id}`}
                aria-label="avatar"
                className={classes.avatar}
                src={
                  profile_image ||
                  randomEmojis[Math.floor(Math.random() * randomEmojis.length)]
                }
              />
            }
            action={
              <IconButton
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
          <VideoPlayer url={video_url} />

          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              aria-label="Like this"
              className={classes.actionButton}
              onClick={() => {
                swal({
                  title: "Thank you for the like!",
                  text: "Stay tuned for this future feature!",
                  icon: "info",
                  buttons: { text: "OK" }
                });
              }}
            >
              <Favorite />
            </IconButton>
            <IconButton aria-label="Share" className={classes.actionButton}>
              <SocialShareIcon id={id} />
            </IconButton>

            {/* Conditional rendering based on type of card */}
            {/* for challenges */}
            {!currentPath.match(/^\/challenges$/) &&
            type === "challenge" &&
            currentUser._id === user_id ? (
              <IconButton
                aria-label="Delete"
                className={classes.actionButton}
                onClick={() => {
                  swal({
                    title: "Are you sure?",
                    text:
                      "Once deleted, this challenge and any associated submissions will be deleted.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                  }).then(willDelete => {
                    if (willDelete) {
                      LocalApi.delete(`/challenges/${id}`)
                        .then(res => {
                          swal("The challenge has been deleted!", {
                            icon: "success",
                            button: false,
                            timer: 2000
                          });
                          setTimeout(() => {
                            this.props.history.replace("/challenges");
                          }, 2000);
                        })
                        .catch(error => swal(":(", `${error}`, "error"));
                    } else {
                      swal("Your challenge is safe!");
                    }
                  });
                }}
              >
                <Delete style={{ marginTop: "-5px" }} />
              </IconButton>
            ) : null}
          </CardActions>

          <CardContent className={classes.text}>
            <Typography variant="body1">{title} </Typography>
          </CardContent>
          {description && (
            <CardContent className={classes.text}>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
          )}
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

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(ChallengeCard))
);
