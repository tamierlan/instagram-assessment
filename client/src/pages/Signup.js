import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import DontHaveAccount from '../components/DontHaveAccount';
import GetTheApp from '../components/GetTheApp';
import Err from '../components/Err';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Signup = () => {
  const [ logged, setLogged ] = useState(false);
  const [ err, setErr ] = useState('OR');

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
  };

  const authorizing = () => {
    if (localStorage.usertoken) {
      setLogged(true)
    }
  };


  const signupSubmit = () => {
    const val = '1px solid red';
    const inval = '1px solid red'
    let invalid = false;
    if (pass.length < 6) return
    if (email === '') { setEmail_val(inval); invalid = true; };
    if (full === '') { setFull_val(inval); invalid = true; };
    if (user === '') { setUser_val(inval); invalid = true; };
    if (pass.length < 6) { setPass_val(inval); invalid = true; };
    if (!invalid) {
      setEmail_val(val);
      setFull_val(val);
      setUser_val(val);
      setPass_val(val);
      setErr('OR')

      axios.post('http://localhost:5000/signup', {email: email, fullname: full, username: user, password: pass})
      .then(res => {
        if (res.data === 'User already exist') {
          setErr('This Email is already taken!');
          return
        } else if (res.data) {
          localStorage.setItem('usertoken', res.data);
          authorizing()
          return
        } else {
          setErr('Something went wrong try again later!');
        }
      })
    }
  };

  useEffect(() => {
    authorizing()
  }, []);

  if (logged) {
    return <Redirect to='/user-account' />;
  } else {
    return (
      <div className='signup login-wrapper'>

        <div className='ss signup login'>
          <h1>Instagram</h1>
          <strong>Sign up to see photos and videos from your friends.</strong>
          <button><img src='https://w7.pngwing.com/pngs/184/147/png-transparent-facebook-computer-icons-social-media-social-networking-service-scalable-graphics-facebook-f-logo-white-background-facebook-lite-logo-angle-text-website-thumbnail.png' alt='f-icon' height='20px' /><h3>Log in with Facebook</h3></button>

          <Err err={err} />

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
  }
};

export default Signup;
