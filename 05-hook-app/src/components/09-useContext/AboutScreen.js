import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {
  const {user, setUser} = useContext(UserContext);
  const handleLogout = () => {
    setUser({});
  } 

  return (
      <>
        <h1>AboutScreen</h1>  
        <hr/>
        <pre className="container">
          {JSON.stringify(user, null,3)}
        </pre>
        <button className="btn btn-outline-warning" onClick={ handleLogout }>Logout</button>
      </>
  );
}

export default AboutScreen;