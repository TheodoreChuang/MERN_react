import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
    const { component: Component, token, ...other } = props;

    return <Route {...other} render={props => {
        if (token) {
            return <Component {...props} />
        }

        return <Redirect to="/landing" />
    }} />
}

const mapStateToProps = (state)  => {
    return {
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(PrivateRoute);