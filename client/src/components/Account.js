import React from 'react';

const Account = (props) => {
  console.log(props.userData.email)
  const { username, fullname, email } = props.userData;
  return (
    <div className='account'>
      <aside>

      </aside>
      <main>main</main>
    </div>
  )
};

export default Account;
