import React from "react";
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPassowrd } from "../../actions/auth";

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Juan',
        email: 'juan.prueba@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            dispatch(startRegisterWithEmailPassowrd(email, password, name));
        }
    }

    const isFormValid = () => {
        
        if(name.trim().length === 0) {
            dispatch(setError('Name is required.'));
            return false;
        }

        if(!validator.isEmail(email)) {
            dispatch(setError('Email is required.'));
            return false;
        }
        
        if(password.trim().length === 0) {
            dispatch(setError('password is required.'));
            return false;
        }

        if(password2.trim().length === 0) {
            dispatch(setError('Confirm password is required.'));
            return false;
        }

        if((password !== password2)) {
            dispatch(setError('Password and confirm password are not equeal.'));
            return false;
        }

        if(password.trim().length < 5) {
            dispatch(setError('Password should be at least 5 characters.'));
            return false;            
        }

        dispatch(removeError());
        return true;
    }

    return(
        <>
           <h3 className="auth__title">Login</h3>
           <form onSubmit={handleRegister}>
               { msgError && (<div className="auth__alert-error">{msgError}</div>)}
               <input className="auth__input" type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} autoComplete="off"/> 
               <input className="auth__input" type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange}/>
               <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
               <input className="auth__input" type="password" placeholder="Confirm password" name="password2" value={password2} onChange={handleInputChange}/>
               <button className="btn btn-primary btn-block mb-5" type="submit" >Register</button>

               <Link className="link" to="/auth/login">Already register</Link>
           </form>
        </>
    );
};

export default RegisterScreen;