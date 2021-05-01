import React from 'react';
import LoginWithFacebook from '../components/LoginWithFacebook';
import DontHaveAccount from '../components/DontHaveAccount';
import GetTheApp from '../components/GetTheApp';

const Login = () => {

  return (
    <div className='login-wrapper'>

      <div className='login'>
        <h1>Instagram</h1>
        <input  type='text' placeholder='Phone number, username, or email' /><br />
        <input  type='text' placeholder='Password' /><br />
        <button><h3>Log In</h3></button>
        <LoginWithFacebook />
      </div>

      <DontHaveAccount />

      <GetTheApp />

    </div>
  )
};
export default Login;
