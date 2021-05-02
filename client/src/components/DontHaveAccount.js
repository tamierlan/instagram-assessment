import React from 'react';
import { Link } from 'react-router-dom';

const DontHaveAccount = (props) => {
  const { question, linkText, link } = props;

  return (
    <div className='login dont'>
      <a>{question}</a> <strong><Link to='/signup' to={`/${link}`}> {linkText}</Link></strong>
    </div>
  )
};

export default DontHaveAccount;
