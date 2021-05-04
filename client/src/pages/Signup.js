import React, { useState } from 'react';
import DontHaveAccount from '../components/DontHaveAccount';
import GetTheApp from '../components/GetTheApp';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Signup = () => {
  const [ email, setEmail ] = useState('');
  const [ full, setFull ] = useState('');
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');

  const [ email_val, setEmail_val ] = useState('');
  const [ full_val, setFull_val ] = useState('');
  const [ user_val, setUser_val ] = useState('');
  const [ pass_val, setPass_val ] = useState('');
  const [ butt, setButt ] = useState('rgba(0,149,246,.3)');


  const setPassword = (event) => {
    setPass(event.target.value)
    if (event.target.value.length > 5) {
      setButt('#0099ff')
    } else {
      setButt('rgba(0,149,246,.3)')
    }
  }


  const signupSubmit = () => {
    let invalid = false;
    if (pass.length < 6) return
    if (email === '') { setEmail_val('1px solid red'); invalid = true; };
    if (full === '') { setFull_val('1px solid red'); invalid = true; };
    if (user === '') { setUser_val('1px solid red'); invalid = true; };
    if (pass.length < 6) { setPass_val('1px solid red'); invalid = true; };
    if (!invalid) {
      setEmail_val('1px solid silver');
      setFull_val('1px solid silver');
      setUser_val('1px solid silver');
      setPass_val('1px solid silver');

      axios.post('http://localhost:5000/signup', {email: email, fullname: full, username: user, password: pass})
      .then(res => {
        if (res.data) {
          localStorage.setItem('usertoken', res.data)
        }

        // if (res === 'User already exist') {
        //   console.log(res)
        // } else {
        //   console.log(res)
        // }
      })
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
        <input style={{border: email_val}} onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' placeholder='Mobile Number or email' /><br />
        <input style={{border: full_val}} onChange={(e)=>{setFull(e.target.value)}} value={full} type='text' placeholder='Full Name' /><br />
        <input style={{border: user_val}} onChange={(e)=>{setUser(e.target.value)}} value={user} type='text' placeholder='Username' /><br />
        <Form.Control style={{border: pass_val}} onChange={(e)=>{setPassword(e)}} value={pass} type='password' placeholder='Password' /><br />
        <button onClick={signupSubmit} style={{background: butt}} className='signup-button'><h3>Sign up</h3></button>

        <a href='/#' className='aaa'>By signing up, you agree to our <strong> Terms , Data Policy</strong> and <strong>Cookies Policy</strong> .</a>

      </div>

      <DontHaveAccount link='login' question='Have an account?' linkText='Log in' />

      <GetTheApp />

    </div>
  )
};

export default Signup;
