import React from 'react';
import {logout} from '../features/userSlice';
import {useDispatch} from 'react-redux';
import '../index.css'

// import {selectUser} from '../features/userSlice';

const Logout = () => {

  var users = localStorage.getItem('users');
  if(users)
  {
    users = JSON.parse(users);
  }
  for(var i=0;i<users.length;i++)
  {
    if(users[i].token === true)
    {
      var user = users[i];
    }
  }
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout({
      user:user
    }));
    window.location.reload(false);
  }
  return (
    <div>
      <div className='text-center logout'>
        <h1 className="name">{user.name}</h1>
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
