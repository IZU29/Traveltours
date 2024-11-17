import React from 'react'
import { FaCircleUser } from "react-icons/fa6"
import loginPic from '../undraw_Sign_up_n6im-removebg.png'

const Register = () => {
  return (
    <div className="flex border-green-500 h-[60vh] w-1/2 m-auto shadow-2xl rounded-sm my-10">
    <div className="flex  border-red-500 bg-white w-1/2">
    <img src={loginPic} alt="" srcset="" />
    </div>
    <div className="flex bg-orange-400 flex-col h-full w-1/2 items-center justify-between p-4 ">
    <div className="text-xl text-white">
        <FaCircleUser className="text-[100px]"/>
    </div>
    <h1 className="text-2xl text-white">Register</h1>
    <input type="text" name="" id="" className='outline-none bg-white rounded-md w-4/5 p-2 border-none' placeholder='User'/>
    <input type="text" name="" id="" className='outline-none bg-white rounded-md w-4/5 p-2 border-none' placeholder='Email'/>
    <input type="password" name="" id="" className='outline-none bg-white rounded-md w-4/5 p-2 border-none' placeholder='Password'/>
    <button type="submit" className='bg-black w-3/5 p-2 rounded-md text-white'>Submit</button>
    </div>
</div>
  )
}

export default Register