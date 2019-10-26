import React from 'react';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={componentProps =>
            isAuthenticated ? (
                <Component {...componentProps} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: componentProps.location },
                    }}
                />
            )
        }
    />
);

export default ProtectedRoute;
