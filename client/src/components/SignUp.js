import React from 'react'
import { Link } from 'react-router-dom'
import '../styleSheet/signup.css'

const SignUp = () => {
  return (
    <div className='signUpLinks'>
      <h1><Link to='/register' className='reg'>Register</Link></h1>
      <h1><Link to='/login' className='log'>Login</Link></h1>
    </div>
  )
}

export default SignUp