import React from "react";

const NotesAppBar = () => {
    return(
        <div className="notes__navbar">
            <span>09 de septiembre 2021</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn">Save</button>
            </div>
        </div>
    );
};

export default NotesAppBar;