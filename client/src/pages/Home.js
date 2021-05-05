import React, { useState, useEffect } from 'react';
import PhoneImg from '../components/PhoneImg';
import { Redirect } from 'react-router-dom';
import DontHaveAccount from '../components/DontHaveAccount';
import LoginWithFacebook from '../components/LoginWithFacebook';
import GetTheApp from '../components/GetTheApp';
import Err from '../components/Err';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Home = () => {
  const [ login, setLogin ] = useState('');
  const [ pass, setPass] = useState('');
  const [ butt, setButt ] = useState('rgba(0,149,246,.3)');
  const [ logged, setLogged ] = useState(false);
  const [ err, setErr ] = useState('OR');

  const setPassword = (event) => {
    setPass(event.target.value);
    if (event.target.value.length < 6) {
      setButt('rgba(0,149,246,.3)')
    } else {
      if (login.length > 0) {
        setButt('#0099ff')
      }
    }
  };
  const setLoggin = (event) => {
    setLogin(event.target.value);
    if (pass.length > 5 && event.target.value.length > 0) {
      setButt('#0099ff')
    } else {
      setButt('rgba(0,149,246,.3)');
    }
  };

  const authorizing = () => {
    if (localStorage.usertoken) {
      setLogged(true);
    }
  };


  const loginSubmit = () => {
    if (pass.length < 6 || login.length === 0) {
      return
    }
    axios.post('http://localhost:5000/login', {email: login, password: pass})
    .then(res => {
      if (res.data) {
        if (res.data === 'User does not exist') {
          setErr('User does not exist!');
        } else {
          localStorage.setItem('usertoken', res.data);
          authorizing()
        }
      }
    })
  };


  useEffect(() => {
    authorizing()
  }, []);

  if (logged) {
    return <Redirect to='/user-account' />;
  } else {
    return (
      <div className='home'>
      <div className='inner-home'>
        <PhoneImg />
        <div className='login-wrapper'>


          <div className='login'>
            <h1>Instagram</h1>
            <input onChange={(e)=>{setLoggin(e)}} value={login} type='text' placeholder='Phone number, username, or email' /><br />
            <Form.Control onChange={(e)=>{setPassword(e)}} value={pass} type='password' placeholder='Password' />

            <button onClick={loginSubmit} style={{background: butt}}><h3>Log In</h3></button>
            <Err err={err} />
            <LoginWithFacebook />
          </div>

          <DontHaveAccount link='signup' question="Don't have an account?" linkText='Sign up' />

          <GetTheApp />

        </div>
      </div>
      </div>
    )
  }
};

export default Home;
