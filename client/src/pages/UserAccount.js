import React, { useState, useEffect } from 'react';
import Account from '../components/Account';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const UserAccount = () => {
  const [ logged, setLogged ] = useState(false);
  const [ logHelp, setLoghelp ] = useState(false);
  const [ userData, setUserdata ] = useState({});

  const getData = () => {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);
    setUserdata(decoded);
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
    return <div />
  } else {
    if (logged) {
      return <Account userData={userData} />
    } else {
      return <Redirect to='/' />;
    }
  }
};

export default UserAccount;
