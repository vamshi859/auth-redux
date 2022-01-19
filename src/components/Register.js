import React,{useState} from 'react';
import '../index.css'
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { register } from '../features/userSlice';

const Register = () => { 
  const history = useHistory();
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({
      name:name,
      email:email,
      password:password,
      loggedIn:true,
      token:false
    }))
    history.push('/');
  }
  return (
    <div className="container form">
      <div className='box'>
        <h4 className='pt-2 pl-3'>Register</h4>
        <form className='m-3' onSubmit={onHandleSubmit}>
          <div className='form-group'>
            <span>E-Mail Address:</span><input type="email" className='form-control' placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)}  />
          </div>
          <div className='form-group'>
            <span>Name:</span>
            <input type="text" className='form-control' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-group'>
            <span>Password:</span>
            <input type="password" className='form-control' placeholder='Enter password' required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='form-group'>
            <button className='form-control btn btn-primary' style={{fontSize:"20px",height:"50px"}}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;