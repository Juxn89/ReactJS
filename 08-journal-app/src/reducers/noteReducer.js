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
        case type.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case type.notessLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case type.notessUpdate:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
            }
        case type.notessDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case type.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }
        default:
            return state;
    }
}