import React from "react";
import { useForm } from "../hooks/useForm";

const ToDoAdd = ({handleAddToDO}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length < 1)
            return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddToDO(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input type="text" name="description" placeholder="nombre..." autoComplete="off" className="form-control" onChange={handleInputChange} value={description}/>
                <button type="submit" className="btn btn-success mt-2 mb-2 btn-block" >Agregar...</button>
            </form>
        </>
    );
};

export default ToDoAdd;