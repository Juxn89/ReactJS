import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { type } from "../../types/types";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const doc = await addDoc(collection(db, `${ uid }`, 'journal/notes'), newNote);
        dispatch(activeNote(doc.id, newNote));
        dispatch(AddNewNote(doc.id, newNote));
    };
};

export const activeNote = (id, note) => ({
    type: type.activeNote,
    payload: {
        id,
        ...note
    }
});

export const AddNewNote = (id, note) => ({
    type: type.notesAddNew,
    payload: {
        id,
        ...note
    }
});

export const setNotes = (notes) => ({
    type: type.notessLoad,
    payload: notes
});