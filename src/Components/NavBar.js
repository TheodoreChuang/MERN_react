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
import {
  Home,
  Edit,
  AccountCircle,
  HowToReg,
  ArrowBack
} from "@material-ui/icons/";
import MoreIcon from "@material-ui/icons/MoreVert";
import LockIcon from "@material-ui/icons/Https";

// import SearchIcon from "@material-ui/icons/Search";
// import InputBase from "@material-ui/core/InputBase";
// import { fade } from "@material-ui/core/styles/colorManipulator";
// import Add from "@material-ui/icons/AddCircle";

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
  // --- For Search Bar - Future Feature
  // search: {
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: fade(theme.palette.common.white, 0.25)
  //   },
  //   marginRight: theme.spacing.unit * 2,
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing.unit * 3,
  //     width: "auto"
  //   }
  // },
  // searchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // inputRoot: {
  //   color: "inherit",
  //   width: "100%"
  // },
  // inputInput: {
  //   paddingTop: theme.spacing.unit,
  //   paddingRight: theme.spacing.unit,
  //   paddingBottom: theme.spacing.unit,
  //   paddingLeft: theme.spacing.unit * 10,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("md")]: {
  //     width: 200
  //   }
  // }
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
    const { classes, token } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const currentPath = window.location.pathname;

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {/* Home Icon - always available */}
        <MenuItem component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>

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
                this.props.history.goBack();
                console.log(this.props.history);
                console.log(this.props.history.length);
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

            {/* For Search Bar - Future Feature
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div> */}

            <div className={classes.grow} />

            {/* Desktop Menu - Hidden on Mobile */}
            <div className={classes.sectionDesktop}>
              {/* Home Icon - always available */}
              <IconButton color="inherit" component={Link} to="/">
                <Home />
              </IconButton>

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

              {/* Only Admin can create challenge for MVP
              {!currentPath.includes("newchallenge") ? (
                <IconButton color="inherit" component={Link} to="/newchallenge">
                  <Add />
                </IconButton>
              ) : null} */}

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
    token: state.auth.token
  };
};

const Wrapped = connect(
  mapStateToProps,
  null
)(NavBar);

export default withStyles(styles)(Wrapped);
