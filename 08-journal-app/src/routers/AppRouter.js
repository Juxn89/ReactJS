import React from "react";
import { Route, Router, Switch, Redirect } from "react-router";
import JournalApp from "../JournalApp";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={ AuthRouter } />
                    <Route exact path='/' component={ JournalApp } />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;