import React from 'react';
import { Link } from 'react-router-dom';

const DontHaveAccount = () => {
  return (
    <div className='login dont'>
      <a>Don't have an account?</a> <strong><Link to='/signup'> Sign up</Link></strong>
    </div>
  )
};

export default DontHaveAccount;
