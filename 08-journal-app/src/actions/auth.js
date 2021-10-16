import { type } from "../types/types";
import { googleAuthProvider } from "../firebase/firebase-config";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const startLoginEmailPassword = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Carlos'));
        }, 3500);
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