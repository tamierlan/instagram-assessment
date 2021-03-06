import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Error = () => {
  const [ goback, setGoback ] = useState(false);

  if (goback) {
    return <Redirect to='/user-account' />;
  } else {
    return (
      <div>
        <h1>Error: Wrong page</h1>
        <button onClick={() => setGoback(true)}></button>
      </div>
    )
  }
};

export default Error;
