import React from 'react';
import { Link } from 'react-router-dom';
import LoginWithFacebook from '../components/LoginWithFacebook';
import DontHaveAccount from '../components/DontHaveAccount';

const Login = () => {

  return (
    <div className='login-wrapper'>


      <div className='login'>
        <h1>Instagram</h1>
        <input value='' onChange='' type='text' placeholder='Phone number, username, or email' /><br />
        <input value='' onChange='' type='text' placeholder='Password' /><br />
        <button><h3>Log In</h3></button>

        <LoginWithFacebook />
      </div>



      <DontHaveAccount />


    </div>
  )
};
export default Login;
