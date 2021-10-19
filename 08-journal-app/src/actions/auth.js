import { type } from "../types/types";
import { googleAuthProvider } from "../firebase/firebase-config";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { finishLoading, startLoading } from "./ui";
import { async } from "@firebase/util";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
       const auth = getAuth();
       dispatch(startLoading());

       signInWithEmailAndPassword(auth, email, password)
       .then( ({user}) => {
           dispatch(login(user.uid, user.displayName));
       } )
       .catch( err => console.error(err) )
       .finally(info => dispatch(finishLoading()));
    }
}

export const startRegisterWithEmailPassowrd = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => { 
            console.log(user);
            await updateProfile(user, {displayName: name});
            dispatch(login(user.uid, user.displayName));
        })
        .catch((error) => console.log(error));
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
        .then( ({user}) => 
            dispatch(
                login(user.uid, user.displayName)
            )
        );
    }
}

export const login = (uid, displayName) => {
    return {
        type: type.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        const auth = getAuth();
        await auth.signOut();

        dispatch( logout() );
    };
}

export const logout = () => ({
    type: type.logout
});