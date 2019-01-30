import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SocialShareIcon from "./../icons/SocialShareIcon";
import LocalApi from "./../../apis/local";
import VideoPlayer from "./../VideoPlayer";

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 600,
    padding: "20px"
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
    backgroundColor: red[500]
  }
});

class ChallengeCard extends Component {
  state = {
    expanded: false,
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const {
      classes,
      history,
      id,
      user_id,
      nickname,
      profile_image,
      title,
      yt_id,
      description,
      date_created
    } = this.props;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem component={Link} to={`/challenges/${id}`} onClick={this.handleMenuClose}>View More Challenge Details</MenuItem>
        <MenuItem component={Link} to={`/challenges/${id}/submit`} onClick={this.handleMenuClose}>Join Challenge</MenuItem>
        {/* delete function */}
        {/* <MenuItem component={Link} to={`/challenges/${id}/submit`} onClick={this.handleMenuClose}>Delete Challenge</MenuItem> */}
      </Menu>
    );

    return (
      <div className={`${classes.root}`}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="avatar" className={classes.avatar}>
                {(profile_image && (
                  <img src={profile_image} alt="profile image" />
                )) ||
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
                <MoreVertIcon />
              </IconButton>
            }
            title={nickname}
            subheader={date_created}
          />
          <CardContent>
            <Typography component="p">{title}</Typography>
          </CardContent>
          <VideoPlayer url={yt_id}/>
        <CardContent>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
              <SocialShareIcon id={id} />
            </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        </Collapse>

        {/* delete challenge button */}
        <button onClick={() => {
          const r = window.confirm("Are you sure you want to delete this challenge?");
          
          if (r == true) {
            LocalApi.delete(`/challenges/submissions/${id}`)
            console.log("deleted");
          }

        }}>Delete</button>

      </Card>
      {renderMenu}
      </div>
    );
  }
}

ChallengeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(ChallengeCard));
