import React from 'react';
import DontHaveAccount from '../components/DontHaveAccount';
import GetTheApp from '../components/GetTheApp';

const Signup = () => {
  return (
    <div className='signup login-wrapper'>

      <div className='signup login'>
        <h1>Instagram</h1>
        <strong>Sign up to see photos and videos from your friends.</strong>
        <button><img src='https://w7.pngwing.com/pngs/184/147/png-transparent-facebook-computer-icons-social-media-social-networking-service-scalable-graphics-facebook-f-logo-white-background-facebook-lite-logo-angle-text-website-thumbnail.png' alt='f-icon' height='20px' /><h3>Log in with Facebook</h3></button>
        <input  type='text' placeholder='Phone number, username, or email' /><br />
        <input  type='text' placeholder='Password' /><br />
        <input  type='text' placeholder='Password' /><br />
        <input  type='text' placeholder='Password' /><br />
        <button><h3>Log In</h3></button>

      </div>

      <DontHaveAccount />

      <GetTheApp />

    </div>
  )
};

export default Signup;
