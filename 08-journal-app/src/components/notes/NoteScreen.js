import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    return(
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off"/>
                <textarea placeholder="What happend today..." className="notes__textarea"></textarea>
                <div className="notes__image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HKSIg8lFiuI2xqdO2rmktaDbn5ZXjpnkHg&usqp=CAU" alt="image_cover"/>
                </div>
            </div>
        </div>
    );
};

export default NoteScreen;