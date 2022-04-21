import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { Context } from '../context/Context';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch } = useContext(Context)


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START"});

    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
    }catch(err){
      
    }
  }

  console.log(user);
  return (
    <>
        <div className='section regSection logSection'>
            <div className='partition2 regPart logPart'>
                <h1>Login</h1>
                <form action="" className='form-group updateForm regForm logForm' onSubmit={handleSubmit}>
                  <input type="text" placeholder='Username' className='titleInput regP' ref={userRef}/>
                  <input type="password" placeholder='Password' className='titleInput regP' ref={passwordRef}/> 
                  <input type="submit" value="Login" className='regbtn submitbtns'/>
                </form>
                
            </div>
        </div>
    </>
  )
}

export default Login