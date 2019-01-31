import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
    const { component: Component, token, admin, user, ...other } = props;

    
    return <Route {...other} render={props => {
        // Admin check on route
        if (admin === true) {
            console.log(admin);
            console.log(token);
            console.log(user);
            console.log("12");
            if (token && user.is_admin === true) {
                console.log("15");
                return <Component {...props} />
            }
            if (token && user.is_admin === false) {
                console.log("18");
                return <Redirect to="/" />
            }
        }

        // Logged in check
        if (token) {
            console.log("23");
            return <Component {...props} />
        }

        // Else redirect
        return <Redirect to="/landing" />
    }} />
}

const mapStateToProps = (state)  => {
    return {
        token: state.auth.token,
        user: state.currentUser
    };
}

export default connect(mapStateToProps)(PrivateRoute);