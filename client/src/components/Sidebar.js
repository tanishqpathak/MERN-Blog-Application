import React, { useContext, useState, useEffect } from 'react'
import SignUp from './SignUp';
import '../styleSheet/sidebar.css'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import axios from 'axios';

const Sidebar = () => {
    const { user, dispatch } = useContext(Context);

    const PF  = "http://localhost:5000/images/"

    const handleLogout =() => {
        dispatch({ type: "LOGOUT"})
    }

    const [users, setUsers] = useState([])

        useEffect(() => {
            const fetchUsers = async () => {
            const res = await axios.get("/users")
            setUsers(res.data)
            }
            fetchUsers()
        },[])


  return (
      <>
        <div className='container'>
            { user ? <><div className='profile'>
                <div className='profile-img'>
                    <img src={PF + user.profilePic} alt="" />
                </div>
                <p className='profile-name'>@{user.username}</p>
            </div>
            <div className='login-links'>
                { user && <Link to="" className='logoutbtn' onClick={handleLogout}>LOGOUT</Link> }
            </div></> : <SignUp /> }
            
            <div className='categories'>
                
                <h5>Top Authors</h5>
                { users && <ul className='catlinks' >
                        { users.map( user => ( 
                            <div className='author-box'>
                                <div className='image-box'>
                                    <img src={PF + user.profilePic}/>
                                </div>
                                <li style={{ listStyle: 'none'}}> <Link to={`?user=${user.username}`}  style={{textDecoration:'none', color:"white"}}> {user.username} </Link></li>            
                            </div>
                        ))}
                    </ul> }   
            </div>
            <div className='social-media'>
                <a href="https://in.pinterest.com/" target="_blank"><i class="icons fa-brands fa-pinterest"></i></a>
                <a href="https://linkedin.com/" target="_blank"><i class="icons fa-brands fa-linkedin" ></i></a>
                <a href="https://facebook.com/" target="_blank"><i class="icons fa-brands fa-facebook" ></i></a>
            </div>
        </div>
      </>
  )
}

export default Sidebar