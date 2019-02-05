import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeAuthToken } from "./../actions";

import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  withStyles
} from "@material-ui/core/";

import {
  Edit,
  AccountCircle,
  HowToReg,
  ArrowBack,
  ExitToApp,
  ControlPoint
} from "@material-ui/icons";
import MoreIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  root: {
    width: "100%",
    marginBottom: "60px"
  },
  toolbar: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "0px"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  feeds: {
    display: "flex",
    justifyContent: "space-around",
    flexGrow: 1
  },
  feedButton: {
    backgroundColor: "transparent"
  }
});

class NavBar extends Component {
  state = {
    mobileMoreAnchorEl: null
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes, admin, removeAuthToken, token, history } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const currentPath = window.location.pathname;

    /*** Mobile Menu - hidden but expandable ***/
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {/* Render add challenge button - if admin */}
        {/* {!currentPath.includes("newchallenge") && admin === true ? ( */}
        <MenuItem component={Link} to="/newchallenge">
          <ListItemIcon>
            <ControlPoint />
          </ListItemIcon>
          <ListItemText primary="New Challenge" />
        </MenuItem>
        {/* ) : null} */}

        {/* Profile OR Profile Edit - only available if logged in */}
        {token && !currentPath.includes("profile") ? (
          <MenuItem component={Link} to="/profile">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
        ) : null}

        {token && currentPath.includes("profile") ? (
          <MenuItem component={Link} to="/updateinfo">
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </MenuItem>
        ) : null}

        {/* Log out OR Sign in - always available */}
        {token ? (
          <MenuItem
            component={Link}
            to="/login"
            onClick={() => {
              removeAuthToken();
            }}
          >
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </MenuItem>
        ) : null}
        {!token ? (
          <MenuItem component={Link} to="/login">
            <ListItemIcon>
              <HowToReg />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </MenuItem>
        ) : null}
      </Menu>
    );

    return (
      //***  This section always visible ***/
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Toolbar className={classes.toolbar}>
            {/* Back Icon - always available */}
            <IconButton
              color="inherit"
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBack />
            </IconButton>

            {/* submissions feed button */}
            <div className={classes.feeds}>
              <IconButton
                disableRipple
                color="inherit"
                component={Link}
                to="/"
                className={classes.feedButton}
              >
                Newsfeed
              </IconButton>

              {/* challenges feed button */}
              <IconButton
                disableRipple
                color="inherit"
                component={Link}
                to="/challenges"
                className={classes.feedButton}
              >
                Challenges
              </IconButton>
            </div>

            {/*** Desktop Menu - Hidden on Mobile ***/}
            <div className={classes.sectionDesktop}>
              {/* Add Challenge - if admin  */}
              {/* {!currentPath.includes("newchallenge") && admin === true ? ( */}
              <IconButton color="inherit" component={Link} to="/newchallenge">
                <ControlPoint />
              </IconButton>
              {/* ) : null} */}

              {/* Profile OR Profile Edit - only available if logged in */}
              {token && !currentPath.match(/^\/profile$/) ? (
                <IconButton color="inherit" component={Link} to="/profile">
                  <AccountCircle />
                </IconButton>
              ) : null}

              {token && currentPath.match(/^\/profile$/) ? (
                <IconButton color="inherit" component={Link} to="/updateinfo">
                  <Edit />
                </IconButton>
              ) : null}

              {/* Log out OR Sign in - always available */}
              {token ? (
                <IconButton
                  color="inherit"
                  component={Link}
                  to="/login"
                  onClick={() => {
                    removeAuthToken();
                  }}
                >
                  <ExitToApp />
                </IconButton>
              ) : null}
              {!token ? (
                <IconButton color="inherit" component={Link} to="/login">
                  <HowToReg />
                </IconButton>
              ) : null}
            </div>

            {/*** For expanding hidden menu on mobile ***/}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    admin: state.currentUser.is_admin
  };
};

const Wrapped = connect(
  mapStateToProps,
  {
    removeAuthToken
  }
)(NavBar);

export default withStyles(styles)(Wrapped);
