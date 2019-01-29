import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Snowboard from './images/snowboarding.jpg';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'
import YTvideo from "../YTvideo";
import { withRouter } from "react-router-dom";
import LocalApi from "./../../apis/local";
import VideoPlayer from "./../VideoPlayer";

const styles = theme => ({
  card: {
    //  maxWidth: 600,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  custom: {
    padding: "20px",
  }
});

class ChallengeCard extends React.Component {
  state = { 
    expanded: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
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
    const { classes, yt_id, title, description, date_created, id, history } = this.props;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
      <div className={`${classes.root} ${classes.custom}`}>
      <Card className={`${classes.card} ${classes.test}`}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              1Up
            </Avatar>
          }
          action={
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.handleProfileMenuOpen}>
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={date_created}
        />
          <VideoPlayer url={yt_id}/>
            {/* <YTvideo yt_id={yt_id} /> */}
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
            <ShareIcon />
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
        <button onClick={() => {
           console.log(this.props);
           console.log(id);
          LocalApi.delete(`/challenges/submissions/${id}`)
        }}>Delete</button>
      </Card>
      {renderMenu}
      </div>
    );
  }
}

ChallengeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const WrappedChallengeCard = withRouter(ChallengeCard)

export default withStyles(styles)(WrappedChallengeCard);