import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
    const {setUser} = useContext(UserContext);

    const myUser = {
      id: 123,
      nickname: 'juxn89'
    }

    return (
        <>
          <h1>LoginScreens</h1>  
          <hr/>
          <button className="btn btn-outline-primary" onClick={() => setUser(myUser)}>Login</button>
        </>
    );
}

export default LoginScreen;