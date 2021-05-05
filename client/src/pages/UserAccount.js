import React, { useState, useEffect } from 'react';
import Account from '../components/Account';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const UserAccount = () => {
  const [ logged, setLogged ] = useState(false);
  const [ logHelp, setLoghelp ] = useState(false);
  const [ userData, setUserdata ] = useState({});
  const [ allUser, setAllUser ] = useState([])

  const getData = () => {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);
    setUserdata(decoded);
    axios.get('http://localhost:5000/users/')
    .then(res => {
      setAllUser(res.data)
    })
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

  const logout = () => {
    localStorage.removeItem('usertoken');
    setLoghelp(true);
    setLogged(false);
  }

  useEffect(() => {
    authorizing()
  }, []);

  if (!logHelp) {
    return <div />
  } else {
    if (logged) {
      return <Account logout={logout} allUser={allUser} userData={userData} />
    } else {
      return <Redirect to='/' />;
    }
  }
};

export default UserAccount;
