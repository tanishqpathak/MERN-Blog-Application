import React from 'react'
import {Link } from 'react-router-dom'

const Post = ({post}) => {
  const PF = "http://localhost:5000/images/";
  return (
        <div className='post'>
            <div className='postimage'>
              { post.photo && 
                <img src={PF + post.photo} alt="" />
              }
              </div>
            <h5><Link to={`/blog/${post._id}`}  className="headerLink" >{post.title}</Link></h5>
            <p className='postdate'>{new Date(post.createdAt).toDateString()}</p>
            <p className='postdesc'>Author - {post.username}</p>
        </div>
  )
}

export default Post