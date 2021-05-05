import React, { useState, useEffect } from 'react';
import Account from '../components/Account';
import { Redirect } from 'react-router-dom';

const UserAccount = () => {
  const [ logged, setLogged ] = useState(false);
  const [ logHelp, setLoghelp ] = useState(false);

  const getData = () => {

  }

  const authorizing = () => {
    if (localStorage.usertoken) {
      setLogged(true);
      setLoghelp(true);
      getData()
    } else {
      setLoghelp(true);
    }
  };

  useEffect(() => {
    authorizing()
  }, []);

  if (!logHelp) {
    return <Account />
  } else {
    if (logged) {
      return <Account />
    } else {
      return <Redirect to='/' />;
    }
  }
};

export default UserAccount;
