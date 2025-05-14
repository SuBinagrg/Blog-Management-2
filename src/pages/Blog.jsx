import axios from 'axios'
import React, { useEffect } from 'react'

const Blog = () => {
    const fetchBlogs = async () =>{
        const response  = await axios.get("https://blog-hqx2.onrender.com/blog")
        console.log(response.data)
    }

    useEffect(() =>{
        fetchBlogs()
    },[])

  return (
    <div>
        {fetchBlogs.map()}
    </div>
  )
}

export default Blog