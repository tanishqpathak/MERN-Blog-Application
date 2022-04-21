import React from 'react'
import Section from "./Section";
import Posts from "./Posts";
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const Home = () => {

  const { search } = useLocation();

  const [posts, setPosts] = useState([])

        useEffect(() => {
            const fetchPosts = async () => {
            const res = await axios.get("/posts"+search)
            setPosts(res.data)
            }
            fetchPosts()
        },[search])
        
  return (
      <>
        {/* < Section /> */}
        < Posts posts={posts}/>
      </>
  )
}

export default Home