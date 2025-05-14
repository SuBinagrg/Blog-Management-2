import React, { Children, useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';


const Authprovider = ({children}) => {
    const [token,setToken] = useState(() => localStorage.getItem("token"))
    const [user,setUser] = useState(null);
    
    console.log(token, "This is token")
    console.log(JSON.stringify(user), "This is user")
  
    //Get Token and User
    useEffect(() => {
      const storedToken = localStorage.getItem("token")
      const storedUser = localStorage.getItem("user")

      if(storedToken && storedUser){
        setToken(storedToken)
        setUser(JSON.parse(storedUser))
      }
    },[])


   useEffect(() => {
        if(token && user){
            localStorage.setItem("token", token)
            localStorage.setItem("user",JSON.stringify(user))
        }
        else{
             localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    },[token,user])

    const login =(logintoken,userDetails) =>{
        setToken(logintoken);
        setUser(userDetails);
    }

    const logout = () =>{
      setToken(null)
      setUser(null)
    }
  return (
   <Authcontext.Provider value={{token,user,login,logout}}>
    {children}
   </Authcontext.Provider>
  )
}

export default Authprovider