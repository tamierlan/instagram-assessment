import React from 'react';

const Err = (props) => {
  if (props.err.length === 2) {
    return (
      <div className='or'>
        <div />
          <h4>OR</h4>
        <div />
      </div>
    )
  } else {
    return (
      <div className='err'>
        <h4>{props.err}</h4>
      </div>
    )
  }
};
export default Err;
