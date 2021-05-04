import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const UserAccount = () => {
  const [ logged, setLogged ] = useState(false);

  const authorizing = () => {
    if (localStorage.usertoken) {
      setLogged(true)
    }
  };

  useEffect(() => {
    authorizing()
  }, []);

  if (logged) {
    return (
      <div>
        <h1>User Account</h1>
      </div>
    )
  } else {
    return <Redirect to='/' />;
  }
};

export default UserAccount;
