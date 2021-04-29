import React from 'react';
import { Link } from 'react-router-dom';

const UserAccount = () => {
  return (
    <div>
      <h1>User Account</h1>
      <Link to='/delete'>delete</Link>
      <Link to='/logout'>logout</Link>
    </div>
  )
};

export default UserAccount;
