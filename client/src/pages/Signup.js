import React, { useState } from 'react';
import DontHaveAccount from '../components/DontHaveAccount';
import GetTheApp from '../components/GetTheApp';
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const [ email, setEmail ] = useState('');
  const [ full, setFull ] = useState('');
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ butt, setButt ] = useState('rgba(0,149,246,.3)');

  const setPassword = (event) => {
    setPass(event.target.value)
    if (event.target.value.length > 5) {
      setButt('#0099ff')
    } else {
      setButt('rgba(0,149,246,.3)')
    }
  }




  return (
    <div className='signup login-wrapper'>

      <div className='ss signup login'>
        <h1>Instagram</h1>
        <strong>Sign up to see photos and videos from your friends.</strong>
        <button><img src='https://w7.pngwing.com/pngs/184/147/png-transparent-facebook-computer-icons-social-media-social-networking-service-scalable-graphics-facebook-f-logo-white-background-facebook-lite-logo-angle-text-website-thumbnail.png' alt='f-icon' height='20px' /><h3>Log in with Facebook</h3></button>
        <div className='or'>
          <div />
          <h4>OR</h4>
          <div />
        </div>
        <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' placeholder='Mobile Number or email' /><br />
        <input onChange={(e)=>{setFull(e.target.value)}} value={full} type='text' placeholder='Full Name' /><br />
        <input onChange={(e)=>{setUser(e.target.value)}} value={user} type='text' placeholder='Username' /><br />
        <Form.Control onChange={(e)=>{setPassword(e)}} value={pass} type='password' placeholder='Password' /><br />
        <button style={{background: butt}} className='signup-button'><h3>Sign up</h3></button>

        <a className='aaa'>By signing up, you agree to our <strong> Terms , Data Policy</strong> and <strong>Cookies Policy</strong> .</a>

      </div>

      <DontHaveAccount link='login' question='Have an account?' linkText='Log in' />

      <GetTheApp />

    </div>
  )
};

export default Signup;
