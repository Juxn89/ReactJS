import React from "react";

const ToDoListItem = ({todo, index, todos, handleDelete, handleToggle}) => {
    return (
        <>
            <li key={todo.id} className="list-group-item">
                <p className={todo.done ? 'complete' : ''} onClick={() => handleToggle(todo.id)}>{index+1}. {todo.desc}</p>
                <button className="btn btn-outline-danger m-1" onClick={ () => handleDelete(todo.id)}>Borrar</button>
            </li>
        </>
    );
}

export default ToDoListItem;