import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React, { useContext } from 'react'
import axios from 'axios'
import { Authcontext } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  //import the login function from authcontext
  const {login} = useContext(Authcontext)
 const navigate = useNavigate()
  const loginUser = async (values) => {
    try {
      const response = await axios.post("https://blog-hqx2.onrender.com/user/login", values)

      //take the token and user data from the response and send it to login function
      const token = response.data.token
      const user = response.data.user
      login(token, user)
      navigate("/")
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik initialValues={{email: '', password: ''}} 
    validationSchema={Yup.object({
      email: Yup.string().email().required("This field is required."),
      password: Yup.string().required("Password is required.")
    })}
    onSubmit={(values)=>{
      loginUser(values)
    }}
    >
      <Form className='flex flex-col'>
        <Field name="email" className="border"/>
        <ErrorMessage name="email"/>
        <Field name="password" type="password" className="border"/>
        <ErrorMessage name="password"/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default Login
