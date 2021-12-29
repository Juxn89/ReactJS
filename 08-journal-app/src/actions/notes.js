import { loadNotes } from "../helpers/loadNotes";
import { activeNote, setNotes } from "../components/auth/notes";
import { db } from "../firebase/firebase-config";
import {doc, updateDoc, deleteDoc, getDocs } from "@firebase/firestore";
import { type } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
import Swal from 'sweetalert2';
import { async } from "@firebase/util";

export const startLoadingNotes = (uid)  => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        
        if(!note.url)
            delete note.url;

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        await updateDoc(doc(db, `${uid}/journal/notes/${note.id}`), noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore));
    }
}

export const refreshNote = (id, note) => ({
    type: type.notessUpdate,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        Swal.fire({title: 'Uploading', text: 'Please wait...', allowOutsideClick:false, didOpen: () => { Swal.showLoading(); }});

        const {active:ActiveNote} = getState().notes;
        const fileUrl = await fileUpload(file);

        ActiveNote.url = fileUrl;
        dispatch(startSaveNote(ActiveNote));

        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispacth, getState) =>{
        const uid = getState().auth.uid;
        await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));

        dispacth(deleteNote(id));
    }
}

export const deleteNote = (id) => ( {
    type: type.notessDelete,
    payload: id
});

export const noteLogOut = () => ({
    type: type.notesLogoutCleaning
});