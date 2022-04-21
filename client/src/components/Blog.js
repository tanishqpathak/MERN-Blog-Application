import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import '../styleSheet/blog.css'
import axios from 'axios'
import { Context } from '../context/Context'

const Blog = () => {

  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context)

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost();
  },[path])

  const handleDelete = async () => {
    try{
      await axios.delete(`/posts/${post._id}`, {data: { username: user.username }});
      window.location.replace("/");

    }catch(err){}
  }
  const handleUpdate = async () => {
    try{
      await axios.put(`/posts/${post._id}`, { username: user.username, title, desc });
      window.location.replace("")
    }catch(err){}
  }
  return (
    <> 
        <div className='section'>
            <div className='blogbox'>
              <div className='partition'>
                <div className='blogImage'>
                  {
                    post.photo && 
                    <img src={PF + post.photo} alt="" />
                  }
                </div>

                { post.username === user?.username &&
                  <div className='icons editIcon'>  
                      <Link to='' className='editIcon'><i class="fa-solid fa-square-pen" onClick={() => setUpdateMode(true)}></i></Link>
                      <Link to='' className='editIcon'><i className="fa-solid fa-trash" onClick={handleDelete}></i></Link>
                  </div>
                }
              </div>

              <div className='partition2'>
                { updateMode ? 
                  <input type="text" value={title} className="titleInputUpdate" autoFocus onChange={(e) => {setTitle(e.target.value)}}/> : (
                      <h1 >{post.title}</h1>
                  )}
                  <div className='author authorDate'>
                    <p >Author - <span className='title'>{post.username}</span></p>
                    <p >{new Date(post.createdAt).toDateString()}</p>
                  </div>
                  { updateMode ? 
                  <div>
                    <textarea name="" value={desc} cols="50" rows="13" className='titleInputDescUpdate' onChange={(e) => {setDesc(e.target.value)}}></textarea>  
                    <button className='updatebtn' onClick={handleUpdate}>Update</button>
                  </div> : (
                   <div>
                     <p className='paragraph p2'>{post.desc}</p>
                   </div>
                  )}
              </div>
                
            </div>
        </div>
    </>
  )
}

export default Blog