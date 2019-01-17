import React from "react";

const PrivateRoute = (props) => {
    const { component: Component } = props;

    return <Route render={props => {
        if (token) {
            return <Component {...props} />
        }

        return <Redirect to="/" />
    }} />
}

export default PrivateRoute;