import React, { useContext } from 'react'
import * as Yup from "yup";
import { Authcontext } from '../context/Authcontext';

    const Navbar = () =>{
        const {user} = useContext(Authcontext)
  return (
    <nav className='flex justify-between p-1 mr-8 bg-gray-400'>
    <div>{user.name}</div>
    
    </nav>
    
  )
}

export default Navbar