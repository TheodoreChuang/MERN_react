import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

//materialize
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      borderRadius: "50px"
    },
    input: {
      display: 'none',
    },
  }); 

class MainPage extends Component  {
    
    render(props) {
        console.log(props);
        const { classes } = this.props;

        return (
            
            <div className="container">
                <h1> oneup </h1>
                <p> Create challenges, share them with your friends and just have fun! </p>
                <div>
                    <div className="center">
                        <Button variant="outlined" className={classes.button} onClick = {
                            () => this.props.history.push("/register")}>
                            <span className="btn">Sign up via email</span>
                        </Button>
                    </div>
                    <div>
                        <Button variant="outlined" className={classes.button} onClick = {
                            () => this.props.history.push("/facebook")}>
                            <span className="btn">Sign up via via Facebook</span>
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

export default withStyles(styles)(MainPage);
