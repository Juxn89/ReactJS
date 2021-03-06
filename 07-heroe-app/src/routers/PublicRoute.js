import {Reac} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ isAuntenticated, component:Component, ...rest }) => {
    return (
        <>
            <Route {...rest} 
                component = {
                    (props) => ( 
                        (!isAuntenticated) 
                            ? (<Component {...props} />)
                            : (<Redirect to="/" />)
                    )} 
            />
        </>
    );
}

PublicRoute.propTypes = {
    isAuntenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}