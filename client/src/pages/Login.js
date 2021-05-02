import React, { useState } from 'react';
import LoginWithFacebook from '../components/LoginWithFacebook';
import DontHaveAccount from '../components/DontHaveAccount';
import GetTheApp from '../components/GetTheApp';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [ login, setLogin ] = useState('');
  const [ pass, setPass] = useState('');
  const [ butt, setButt ] = useState('rgba(0,149,246,.3)');

  const setPassword = (event) => {
    setPass(event.target.value);
    if (pass.length > 4) {
      setButt('#0099ff')
    } else {
      setButt('rgba(0,149,246,.3)')
    }
  }

  const loginSubmit = () => {
    if (login.length < 6) {
      return
    } else if (pass.length < 6) {
      return
    }
  }

  return (
    <div className='login-wrapper'>


      <div className='login'>
        <h1>Instagram</h1>
        <input onChange={(e)=>{setLogin(e.target.value)}} value={login} type='text' placeholder='Phone number, username, or email' /><br />
        <Form.Control onChange={(e)=>{setPassword(e)}} value={pass} type='password' placeholder='Password' />

        <button onClick={loginSubmit} style={{background: butt}}><h3>Log In</h3></button>
        <LoginWithFacebook />
      </div>

      <DontHaveAccount link='signup' question="Don't have an account?" linkText='Sign up' />

      <GetTheApp />

    </div>
  )
};
export default Login;

// <input  type='text' placeholder='Password' /><br />
