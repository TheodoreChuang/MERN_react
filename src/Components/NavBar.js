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
  Typography,
  withStyles
} from "@material-ui/core/";
import { Edit, AccountCircle, HowToReg, ArrowBack } from "@material-ui/icons/";
import MoreIcon from "@material-ui/icons/MoreVert";
import LockIcon from "@material-ui/icons/Https";
import Add from "@material-ui/icons/AddCircle";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
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
  }
});

class NavBar extends Component {
  state = {
    mobileMoreAnchorEl: null
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, admin, removeAuthToken, token, history } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const currentPath = window.location.pathname;

    // Mobile view
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {/* !!!! */}
        {!currentPath.includes("newchallenge") ? (
          <MenuItem component={Link} to="/newchallenge">
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="New Challenge" />
          </MenuItem>
        ) : null}

        {/* Profile OR Profile Edit - only available if logged in */}
        {token && !currentPath.includes("profile") ? (
          <MenuItem component={Link} to="/profile">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
        ) : null}

//     Commented this out on merge conflict - Tyson
//         {currentPath.includes("profile") && currentUser._id && (
//           <MenuItem component={Link} to="/updateinfo">
//             <IconButton color="inherit">
//               <Edit />
//             </IconButton>
//             <p>Edit Profile</p>

        {token && currentPath.includes("profile") ? (
          <MenuItem component={Link} to="/profile/edit">
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
            to="/landing"
            onClick={() => {
              removeAuthToken();
            }}
          >
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </MenuItem>
        ) : null}
        {!token ? (
          <MenuItem component={Link} to="/landing">
            <ListItemIcon>
              <HowToReg />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </MenuItem>
        ) : null}
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* Back Icon - always available */}
            <IconButton
              color="inherit"
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBack />
            </IconButton>

            {/* <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              1UP

            </Typography> */}
            {/* <div className={classes.grow} />
            <div className={classes.sectionDesktop} /> */}

            {/* submissions feed button */}
            <IconButton color="inherit" component={Link} to="/">
              newsfeed
            </IconButton>

            {/* challenges feed button */}
            <IconButton color="inherit" component={Link} to="/challenges">
              challenges
            </IconButton>

            <div className={classes.grow} />

            {/* Desktop Menu - Hidden on Mobile */}
            <div className={classes.sectionDesktop}>
              {/* Add Challenge - if admin  */}
              {!currentPath.includes("newchallenge") && admin === true ? (
                <IconButton color="inherit" component={Link} to="/newchallenge">
                  <Add />
                </IconButton>
              ) : null}

              {/* Profile OR Profile Edit - only available if logged in */}
              {token && !currentPath.includes("profile") ? (
                <IconButton color="inherit" component={Link} to="/profile">
                  <AccountCircle />
                </IconButton>
              ) : null}

              {token && currentPath.includes("profile") ? (
                <IconButton color="inherit" component={Link} to="/profile/edit">
                  <Edit />
                </IconButton>
              ) : null}

              {/* Log out OR Sign in - always available */}
              {token ? (
                <IconButton
                  color="inherit"
                  component={Link}
                  to="/landing"
                  onClick={() => {
                    removeAuthToken();
                  }}
                >
                  <LockIcon />
                </IconButton>
              ) : null}
              {!token ? (
                <IconButton color="inherit" component={Link} to="/landing">
                  <HowToReg />
                </IconButton>
              ) : null}
            </div>

            {/* For expanding hidden menu on mobile */}
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
