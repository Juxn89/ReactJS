import {Reac} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuntenticated, component:Component, ...rest }) => {
    localStorage.setItem('lastPath', rest.location.pathname);
    return (
        <>
            <Route {...rest} 
                component = {
                    (props) => ( 
                        (isAuntenticated) 
                            ? (<Component {...props} />)
                            : (<Redirect to="/login" />)
                    )} 
            />
        </>
    );
}

PrivateRoute.propTypes = {
    isAuntenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}