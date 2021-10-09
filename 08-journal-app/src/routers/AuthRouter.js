import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/auth/login' component={ LoginScreen } />
                <Route exact path='/auth/register' component={ RegisterScreen }></Route>
                <Redirect to="/auth/login"/>
            </Switch>
        </div>
    );
};

export default AuthRouter;