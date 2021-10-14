import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, password2);
    }

    return(
        <>
           <h3 className="auth__title">Login</h3>
           <form onSubmit={handleRegister}>
               <input className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off" value={name} onChange={handleInputChange}/> 
               <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={handleInputChange}/>
               <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
               <input className="auth__input" type="password" placeholder="Confirm password" name="password2" value={password2} onChange={handleInputChange}/>
               <button className="btn btn-primary btn-block mb-5" type="submit" >Register</button>

               <Link className="link" to="/auth/login">Already register</Link>
           </form>
        </>
    );
};

export default RegisterScreen;