import { type } from "../types/types";

const initialState = {
    notes: [],
    active: null
};

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.activeNote:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        default:
            return state;
    }
}