import React, { useEffect, useState } from 'react';
import './effect.css';

const SimpleForm = () => {
    const [state, setState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = state;

    useEffect( () => {
        console.log('hey');
    }, [] );

    useEffect( () => {
        console.log('state');
    }, [state] );

    useEffect( () => {
        console.log('email change');
    }, [email] );

    const hanfleInputChange = ({target}) => {
        setState({
            ...state,
            [target.name]: target.value
        });
    }

    return(
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input type="text" 
                       name="name" 
                       className="form-control" 
                       placeholder="Tu nombre" 
                       autoComplete="off"
                       onChange = { hanfleInputChange } />
            </div>
            <div className="form-group">
                <input type="text" 
                       name="email" 
                       className="form-control" 
                       placeholder="email@gmail.com" 
                       autoComplete="off"
                       onChange = { hanfleInputChange } />
            </div>
        </>
    );
}

export default SimpleForm;