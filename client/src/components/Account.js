import React from 'react';

const Account = (props) => {
  const { userData, allUser } = props;


  console.log(allUser)
  return (
    <div className='account'>
      <aside>
        <div className='profile'>
          <h1 style={{color: 'blue'}}>user profile</h1>
        </div>
        <h1>{userData.username}</h1>
        <h1>{userData.fullname}</h1>
        <h1>{userData.email}</h1>
        <button onClick={props.logout}>Log Out</button>
        <button onClick={psops.deleteUser}>Delete Account</button>
      </aside>

      <main>
      {allUser.map(user => {
        return (
          <div key={user._id} className='each-user'>
            <div className='info-users'>{user.username}</div>
            <div className='info-users'>{user.fullname}</div>
            <div className='info-users'>{user.email}</div>
          </div>
        )
      })}
      </main>
    </div>
  )
};

export default Account;
