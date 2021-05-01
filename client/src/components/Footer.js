import React from 'react';

const Footer = () => {
  const footerData = [
    'About',
    'Blog',
    'Jobs',
    'Help',
    'API',
    'Privacy',
    'Terms',
    'Top',
    'Accounts',
    'Hashtags',
    'Locations',
    'Beauty',
    'Dance',
    'Performance',
    'Fitness',
    'Food',
    'Drink',
    'Home ',
    'Garden',
    'Music',
    'Visual',
    'Arts'
  ];

  return (
    <footer>
    {footerData.map(data => {
      return (
        <a>  {data}  </a>
      )
    })}
    <div className='gap' />
    <a>English @2021 Instagram from Facebook</a>
    </footer>
  )

};

export default Footer;
