import { type } from "../types/types";
import { googleAuthProvider } from "../firebase/firebase-config";
import { getAuth, signInWithPopup } from 'firebase/auth';

export const startLoginEmailPassword = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Carlos'));
        }, 3500);
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