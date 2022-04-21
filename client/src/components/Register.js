import axios from 'axios';
import React, { useState } from 'react'
import '../styleSheet/register.css'

const Register = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handled = async (e) => {
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post("/auth/register", {
        name,
        username, password
      })
      res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }  
  }

  return (
    <>
        <div className='section regSection'>
            <div className='partition2 regPart'>
                <h1>Register</h1>
                <form action="" className='form-group updateForm regForm' onSubmit={handled}>
                  <input type="text" placeholder='Name' className='titleInput regP' onChange={(e) => setName(e.target.value)}/>
                  <input type="text" placeholder='Username' className='titleInput regP'onChange={(e) => setUsername(e.target.value)}/>
                  <input type="password" placeholder='Password' className='titleInput regP'onChange={(e) => setPassword(e.target.value)}/>
                  
                  <input type="submit" value="Register" className='regbtn submitbtns'/>
                  { error && <span style={{ color: "red"}}> Username must be unique ! </span> }
                </form>
            </div>
        </div>
    </>
  )
}

export default Register