import {Reac} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuntenticated, component:Component, ...rest }) => {
    
    return (
        <>
            <Route {...rest} 
                component = {
                    (props) => ( 
                        (isAuntenticated) 
                            ? (<Component {...props} />)
                            : (<Redirect to="/auth/login" />)
                    )} 
            />
        </>
    );
}

PrivateRoute.propTypes = {
    isAuntenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}