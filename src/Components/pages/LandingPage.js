import React, { Component } from "react";
import { Link } from "react-router-dom";

//materialize
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      borderRadius: "50px",
      textTransform: "none"
    },
    input: {
      display: 'none',
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        textTransform: "none",
        textAlign: "center"
    }
  }); 

class LandingPage extends Component  {
    
    render() {
        const { classes } = this.props;

        return (
            
            <div className={classes.container}>
                <h1> oneup </h1>
                <p> Create challenges, share them with your friends and just have fun! </p>
                <div>
                    <div>
                        <Button variant="outlined" className={classes.button} onClick = {
                            () => this.props.history.push("/register")}>
                            Sign up via email
                        </Button>
                    </div>
                    <div>
                        <Button variant="outlined" className={classes.button} onClick = {
                            () => this.props.history.push("/facebook")}>
                            Sign up via via Facebook
                        </Button>
                    </div>
                </div>
                <div>
                    Already have an account?
                        <Link to="/login"> Sign in
                        </Link>
                </div>
            </div>
        );
    }
}

// MainPage.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(styles)(LandingPage);
