import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    const {active:note} = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title, url } = formValues;

    const activeId = useRef(note.id);

    useEffect( () => {
        if(note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
     } , [note, reset] );

    return(
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off" value={title} onChange={ handleInputChange }/>
                <textarea placeholder="What happend today..." className="notes__textarea" value={body} onChange={ handleInputChange }></textarea>
                {
                    (note.url) &&
                    <div className="notes__image">
                        <img src={url} alt="image_cover"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default NoteScreen;