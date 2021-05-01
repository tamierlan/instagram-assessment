import React from 'react';
import PhoneImg from '../components/PhoneImg';
import Login from './Login'

const Home = () => {
  return (
    <div className='home'>
    <div className='inner-home'>
      <PhoneImg />
      <Login />
    </div>
    </div>
  )
};

export default Home;
