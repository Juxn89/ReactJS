import { type } from "../types/types";

const initialState = {
    notes: [],
    active: null
};

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            } 
        case type.logout:
            return {};
        default:
            return state;
    }
}