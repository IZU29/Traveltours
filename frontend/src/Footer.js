import React from 'react'
import {CiInstagram ,CiFacebook ,CiTwitter ,CiYoutube ,CiLocationOn ,CiMail ,CiPhone} from 'react-icons/ci'
import { FaCopyright } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="flex  h-[30vh] flex-col w-3/4 m-auto">
<div className="flex  h-3/4">
<div className="flex flex-col w-1/4 justify-evenly p-2">
  <p className="text-xs  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita aliquid distinctio!</p>
  <div className="flex font-sm justify-between w-2/3">
    <CiFacebook />
    <CiInstagram />
    <CiTwitter />
    <CiYoutube />
  </div>
</div>
<div className="flex flex-col  w-1/4 justify-between p-2">
  <h1 className="text-md font-semibold">Discover</h1>
  <p className="text-xs">Home</p>
  <p className="text-xs">About</p>
  <p className="text-xs">Tour</p>
</div>
<div className="flex flex-col  w-1/4 justify-between p-2">
  <h1 className="text-md font-semibold">Quick Links</h1>
  <p className="text-xs">Gallery</p>
  <p className="text-xs">Login</p>
  <p className="text-xs">Register</p>
</div>
<div className="flex flex-col  w-1/4 justify-between p-2 ">
  <h1 className="text-md font-semibold">Contact</h1>
  <div className="flex text-xs items-center"><CiMail /><p className="">Email:</p><p>izunduche29@gmail.com</p></div>
  <div className="flex text-xs items-center"><CiPhone /><p className="">Contact:</p><p>070748865161</p></div>
  <div className="flex text-xs items-center"><CiLocationOn /><p className="">Address</p><p>Lorem ipsum dolor sit.</p></div>
</div>

</div>
<p className="h-1/4 flex items-center justify-center text-xs">Copyright from the 2024 enterprise of greatness <FaCopyright /></p>
</div>
  )
}

export default Footer