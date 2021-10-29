import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import JournalScreen from "../components/journal/JournalScreen";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect( () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));
            }
            else
                setIsLoggedIn(false);
            
            setChecking(false);
        });
    }, [dispatch, setChecking]);

    if(checking) {
        return (
            <h1>Wait...</h1>
        );
    }

    return(
        <Router>
            <div>
                <Switch>
                    <PublicRoute path='/auth' component={ AuthRouter } isAuntenticated={isLoggedIn}/>
                    <PrivateRoute exact path='/' component={ JournalScreen } isAuntenticated={isLoggedIn}/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;