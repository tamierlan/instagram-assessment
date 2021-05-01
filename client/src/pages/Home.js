import React from 'react';
import PhoneImg from '../components/PhoneImg';
import Login from './Login'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='home'>
      <PhoneImg />
      <Login />
      <Footer />
    </div>
  )
};

export default Home;
