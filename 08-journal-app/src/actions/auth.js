import { type } from "../types/types"

export const login = (uid, displayName) => {
    return {
        type: type.login,
        payload: {
            uid,
            displayName
        }
    }
}