import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../context/Authcontext';
import { MdDelete } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';


const MyBlog = () => {
      const[myBlog,setMyBlog] = useState([]);
       const {user} = useContext(Authcontext);

      console.log(user)
    const fetchData = async()=>{
            if(user){
                const response = await axios.get(`https://blog-hqx2.onrender.com/blog/${user?._id}`);
                 setMyBlog(response.data);
            }
           
    }

    useEffect(()=>{
        fetchData();
    },[user?._id])


     const deleteBlogs =async(id)=>{
        const response = await axios.delete(`https://blog-hqx2.onrender.com/blog/${id}`)
            if(response.status === 200){
               alert("blog delete sucessfully");
            }
     }



  return (
    <div className='w-11/12 mx-auto'>
        <h1>My Blogs</h1>
        <div className='grid gap-12 grid-cols-3'>
        {
           myBlog?.map((blog,index)=>{
               return (
                <div key={index} className='flex flex-col gap-2 shadow-sm p-4 shadow-blue-300'>
                    <h1 className='font-bold text-xl'>{blog.title}</h1>
                    <img src={blog.image} alt="" className="h-65 w-full" />
                    <p className='text-amber-950 font-semibold'>{blog.content}</p>
                   <div className='flex gap-2 items-center'>
                   <button className='text-red-500 cursor-pointer flex  text-2xl'>
                        <MdDelete onClick={()=>deleteBlogs(blog?._id)} />
                    </button>
                  <Link to={`/editBlogs/${blog?._id}`} state={{blog}}>  <button className='text-green-500 cursor-pointer flex  text-2xl'>
                        <RxUpdate />
                    </button>
                    </Link>
                   </div>
                </div>
               )
           })
        }
        </div>
    </div>
  )
}

export default MyBlog