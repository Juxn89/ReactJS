import { loadNotes } from "../helpers/loadNotes";
import { setNotes } from "../components/auth/notes";

export const startLoadingNotes = (uid)  => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}