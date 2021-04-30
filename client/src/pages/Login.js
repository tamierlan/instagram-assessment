import React from 'react';
import { Link } from 'react-router-dom';
import LoginWithFacebook from '../components/LoginWithFacebook';

const Login = () => {

  return (
    <div className='login'>
      <div className='login-inputs'>
      <input value={} onChange={} type='text' placeholder='Phone number, username, or email' />
      <input value={} onChange={} type='text' placeholder='Phone number, username, or email' />
      <button>Log In</button>
      <LoginWithFacebook />
      </div>
    </div>
  )
};
export default Login;


// const Login = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <h1><Link to='/signup'>Signup</Link></h1>
//     </div>
//   )
// };
// export default Login;
