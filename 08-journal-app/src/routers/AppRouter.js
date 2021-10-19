import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user?.uid)
                dispatch(login(user.uid, user.displayName));
        });
    }, []);

    return(
        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={ AuthRouter } />
                    <Route exact path='/' component={ JournalScreen } />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;