import React from 'react';
import Login from './components/Login';
import {Route} from 'react-router-dom';
import Register from './components/Register';
import Logout from './components/Logout';
// import {useSelector} from 'react-redux';
// import {selectUser} from './features/userSlice';

const App = () => {
 
    var users = localStorage.getItem('users');
    if(users)
    {
      users = JSON.parse(users);
      for(var i=0;i<users.length;i++)
      {
        if(users[i].token === true)
        {
          var user = users[i];
        }
      }
      console.log(user)
    }
   
  return (
    <div>
      {user ? <Route path='/' exact component={Logout} />:<Route path='/' exact component={Login} />}

      <Route path='/register' exact component={Register} />
    </div>
  )
}

export default App;