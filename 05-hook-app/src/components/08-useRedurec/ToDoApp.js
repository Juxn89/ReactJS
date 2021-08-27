import './style.css';

import React, { useReducer } from 'react';
import todoReducer from './todoReducer';

const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    },
    {
        id: new Date().getTime(),
        desc: 'Aprender Redux',
        done: false
    }
];

const ToDoApp = () => {
    
    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos);

    return(
        <>
            <div>
                <h1>ToDoApp <small>({todos.length})</small></h1>
                <hr/>
            </div>

            <div className="row">
                <h4>Agregar TODO</h4>
                <hr/>
                <form>
                    <input type="text" name="description" placeholder="nombre..." autoComplete="off" className="form-control" />
                    <button type="button" className="btn btn-success mt-2 mb-2 btn-block">Agregar...</button>
                </form>
            </div>

            {
                todos.map((todo, i) => (
                    <div className="row">
                        <div className="col-4">
                            <p>{i+1}. {todo.desc}</p>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-danger m-1">Borrar</button>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ToDoApp;