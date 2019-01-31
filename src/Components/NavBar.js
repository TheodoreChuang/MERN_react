import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import Edit from "@material-ui/icons/Edit";
import Add from "@material-ui/icons/AddCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import LockIcon from "@material-ui/icons/Https";
import UnlockIcon from "@material-ui/icons/LockOpen";

import { removeAuthToken } from "./../actions";

const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
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

class PrimarySearchAppBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
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
    const { classes, currentUser, removeAuthToken } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const currentPath = window.location.pathname;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem component={Link} to="/" onClick={this.handleMenuClose}>
          Home
        </MenuItem>
        <MenuItem component={Link} to="/profile" onClick={this.handleMenuClose}>
          Profile
        </MenuItem>
      </Menu>
    );

    // Mobile view
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
      
        {!currentPath.includes("newchallenge") ? (
                  <MenuItem component={Link} to="/newchallenge">
                    <IconButton color="inherit">
                      <Add />
                    </IconButton>
                    <p>Add Challenge</p>
                  </MenuItem>
                ) : null}

        {!currentPath.includes("home") ? (
          <MenuItem component={Link} to="/home">
            <IconButton color="inherit">
              <Home />
            </IconButton>
            <p>Home</p>
          </MenuItem>
        ) : null}
       
        {!currentPath.includes("profile") ? (
          <MenuItem component={Link} to="/profile">
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        ) : null}

        <MenuItem
          onClick={() => {
            removeAuthToken();
          }}
        >
          <IconButton color="inherit">
            <LockIcon />
          </IconButton>
          <p>Log Out</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              1UP
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

            {/* submissions feed button */}
            <IconButton
                color="inherit"
                component={Link} 
                to="/" >
                newsfeed
              </IconButton>

            {/* challenges feed button */}
              <IconButton
                color="inherit"
                component={Link} 
                to="/challenges" >
                challenges
              </IconButton>
            
            {/* Add challenge section, render if admin */} 
            {!currentPath.includes('newchallenge') && currentUser.is_admin === true ? 
              <IconButton
                color="inherit"
                component={Link} 
                to="/newchallenge" >
                <Add />
              </IconButton> : null }

            {/* Home section */}
            {!currentPath.includes('home') ? 
              <IconButton
                color="inherit"
                component={Link} 
                to="/" >
                <Home />
              </IconButton> : null }

              {/* Only Admin can create challenge for MVP */}
              {!currentPath.includes("profile") ? (
                <IconButton color="inherit" component={Link} to="/profile">
                  <AccountCircle />
                </IconButton>
              ) : null}
              
              {/*  Log out Section */}
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
            </div>
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
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, {
  removeAuthToken
})(withStyles(styles)(PrimarySearchAppBar));
