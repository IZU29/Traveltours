import React from 'react'
import axios from 'axios'
import loginPic from '../undraw_Sign_up_n6im-removebg.png'
import { FaCircleUser } from "react-icons/fa6"
const Login = () => {

  const [username , setUser] = React.useState('')
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')
  const submitDetails = () => {
    // navigate('/')
    const data = {username ,email ,password}
    const response = axios.post('http://localhost:5000/api/login' , data)
    let token;
    response.then(response => {
      console.log(response)
      localStorage.setItem('token' , (response.data.token))
    })
    // window.alert('working buttons')
    console.log({username ,email ,password})
  }
  return (
    <div className="flex border-green-500 h-[60vh] w-1/2 m-auto shadow-2xl rounded-sm my-10">
        <div className="flex  border-red-500 bg-white w-1/2">
        <img src={loginPic} alt="" srcSet="" />
        </div>
        <div className="flex bg-orange-400 flex-col h-full w-1/2 items-center justify-between p-4 ">
        <div className="text-xl text-white">
            <FaCircleUser className="text-[100px]"/>
        </div>
        <h1 className="text-2xl text-white">Login</h1>
        <input type="text" name="" className='outline-none bg-white rounded-md w-4/5 p-2 border-none' placeholder='Email' onChange = {(e) => setEmail(e.target.value)}/>
        <input type="password" name="" className='outline-none bg-white rounded-md w-4/5 p-2 border-none' placeholder='Password' onChange = {(e) => setPassword(e.target.value)}/>
        <button type="submit" className='bg-black w-3/5 p-2 rounded-md text-white' onClick={submitDetails}>Submit</button>
        </div>
    </div>
  )
}

export default Login