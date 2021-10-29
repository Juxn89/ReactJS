import { collection, getDocs } from "@firebase/firestore"
import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const notes = [];
    const notesSnap = await getDocs(collection(db, `${ uid }`, 'journal/notes'));
    
    notesSnap.forEach(snapHijo =>{
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    
    return notes;
}