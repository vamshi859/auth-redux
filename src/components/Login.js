import React,{useState} from 'react';
import '../index.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../features/userSlice';
const Login = () => {

  const dispatch = useDispatch();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(login({
      email:email,
      password:password
    }));

  }
  return (
      <div className='container form'>
        <div className="row" style={{display:"flex",justifyContent: 'center'}}>
          <div className="col-12 text-center">
            <img src="logo512.png" alt='sample' height="100px" width="100px" />
          </div>
          <div className='box'>
            <h4 className='pt-2 pl-3'>Login</h4>
            <form className='m-3' onSubmit={(e) => handleSubmit(e)}>
              <div className='form-group'>
                <span>E-Mail Address:</span><input type="email" className='form-control' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='form-group'>
                <span>Password:</span>
                <input type="password" className='form-control' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='form-group'>
                <button className='form-control btn btn-primary' style={{fontSize:"20px",height:"50px"}}>Login</button>
              </div>
              <p className='text-center'>Don't have an account?<Link to='/register' > Create One</Link></p>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login;