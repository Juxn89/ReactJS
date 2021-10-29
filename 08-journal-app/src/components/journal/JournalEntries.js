import React from "react";
import JournalEntry from "./JournalEntry";
import { useSelector } from 'react-redux';

const JournalEntries = () => {
    const {notes:entries} = useSelector(state => state.notes);
    return(
        <div className="journal__entries">
            {
                entries.map( value => <JournalEntry key={value.id} {...value}/>)
            }
        </div>
    );
};

export default JournalEntries;