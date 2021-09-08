import './style.css';

import React, { useEffect, useReducer } from 'react';
import todoReducer from './todoReducer';
import {useForm} from '../hooks/useForm';
import ToDoList from './ToDoList';
import ToDoAdd from './ToDoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     }
    // ];
}

const ToDoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddToDO = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return(
        <>
            <div>
                <h1>ToDoApp <small>({todos.length})</small></h1>
                <hr/>
            </div>

            <div className="row">
                <ToDoAdd handleAddToDO={handleAddToDO}/>
            </div>
            <ToDoList todos={todos} handleDelete={ handleDelete } handleToggle={handleToggle}/>
        </>
    );
}

export default ToDoApp;