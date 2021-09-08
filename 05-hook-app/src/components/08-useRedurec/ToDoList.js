import React from "react";
import PropTypes from 'prop-types';
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                {
                todos.map((todo, i) => (
                    <ToDoListItem key={todo.id} todo={todo} index={i} handleDelete={handleDelete} handleToggle={handleToggle}/>
                ))
                }
            </ul>
        </>
    );
};

export default ToDoList;