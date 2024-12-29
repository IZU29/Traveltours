import React from 'react'
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  const loginButton = () => {
    navigate('/login')
  }
  const registerButton = () => {
    navigate('/register')
  }
  const homeButton = () => {
    navigate('/')
  }

  return (
    <div className="flex w-3/4 m-auto h-14 items-center justify-between">
      <div className="flex border-red-500 w-2/4"></div>
      <div className="flex border-green-500 w-1/6 justify-between font-semibold ">
        <h1 className="text-md hover:text-orange-400 cursor-pointer" onClick={() => homeButton()}>Home</h1>
        <h1 className="text-md hover:text-orange-400 cursor-pointer">About</h1>
        <h1 className="text-md hover:text-orange-400 cursor-pointer">Tour</h1>
      </div>
      <div className="flex  w-1/6 justify-evenly items-center">
        <h1 className="font-semibold cursor-pointer hover:text-orange-400" onClick={() => loginButton()}>Login</h1>
        <button type="button" className="bg-orange-400 rounded-full text-white p-2" onClick={() => registerButton()}>Register</button>
      </div>
    </div>
  )
}

export default Header