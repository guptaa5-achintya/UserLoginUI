import React from 'react'
import Auth from './Auth'
import {
    Route,
    Redirect,
} from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={props =>
            Auth.isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Redirect
                to={{
                pathname: "/"
                }}
            />
            )
        }
        />
    );
}
export default PrivateRoute