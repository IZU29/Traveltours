import React from 'react'
import { FaCameraRetro ,FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci"
import { TbLocation , TbRouteSquare} from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md"
import { TiWeatherPartlySunny } from "react-icons/ti"
// import Svglogin from './undraw_sign_up_n6im.svg'
import Man from './assets/images/pexels-italo-melo-881954-2379004-removebg-preview.png'
const Main = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex w-3/4 m-auto h-[300px]">
        <div className="flex flex-col justify-evenly w-1/2 p-2">
          <h1 className="text-3xl font-semibold">Travelling Opens More Doors To Creating <span className="text-orange-400">Memories</span></h1>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa suscipit perspiciatis provident libero pariatur non, architecto blanditiis obcaecati expedita facere?
          </p>
        </div>
          <div className="border border-blue-600 w-1/2"></div>
      </div>
      <div className="w-3/4 m-auto">
      <div className="shadow-md border rounded-full w-[60%] m-2 h-16 flex items-center p-2">
        <div className="flex justify-evenly border-green-600 w-[31%]">
          <div className="flex items-center text-2xl font-bold "><CiLocationOn className="text-orange-400 "/></div>
          <div className="flex flex-col text-xs">
            <label htmlFor="" className="font-semibold">Location</label>
            <input type="text" name="" id="" placeholder='Where Are You Going ?' className="h-4 border-none outline-none"/>
          </div>
        </div>
        <div className="flex justify-between border-green-600 w-[31%]">
          <div className="flex items-center text-2xl font-bold "><TbLocation  className="text-orange-400 "/></div>
          <div className="flex flex-col text-xs">
            <label htmlFor="" className="font-semibold">Distance</label>
            <input type="text" name="" id="" placeholder='Distance/km' className="h-4 border-none outline-none"/>
          </div>
        </div>
        <div className="flex justify-between border-green-600 w-[31%]">
          <div className="flex items-center text-2xl font-bold "><MdPeopleAlt className="text-orange-400 "/></div>
          <div className="flex flex-col text-xs">
            <label htmlFor="" className="font-semibold">Max People</label>
            <input type="text" name="" id="" placeholder='0' className="h-4 border-none outline-none"/>
          </div>
        </div>
        <div className="flex">
        <FaSearch className="text-orange-400"/>
        </div>
      </div>
      </div>
      <div className="flex  w-3/4 m-auto h-[25vh] mt-2">
        <div className="flex flex-wrap w-1/4  items-center justify-center p-2">
        <h1 className="text-3xl font-semibold">We Offer The Best Services</h1>
        </div>
        <div className="flex w-3/4 border-blue-500 justify-evenly">
        <div className="flex flex-col shadow-sm shadow-orange-400 w-[30%] rounded-sm justify-evenly p-2">
        <TiWeatherPartlySunny className="text-orange-400 text-2xl"/>
        <div className="flex flex-col justify-between">
          <div className="text-lg font-semibold">Calculate Weather</div>
          <div className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolore?</div>
        </div>
        </div>
        <div className="flex flex-col shadow-sm shadow-orange-400 w-[30%] rounded-sm justify-evenly p-2">
        <TbRouteSquare  className="text-orange-400 text-2xl"/>
        <div className="flex flex-col justify-between">
          <div className="text-lg font-semibold">Best Tour Guide</div>
          <div className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolore?</div>
        </div>
        </div>
        <div className="flex flex-col shadow-sm shadow-orange-400 w-[30%] rounded-sm justify-evenly p-2">
        <FaCameraRetro  className="text-orange-400 text-2xl"/>
        <div className="flex flex-col justify-between">
          <div className="text-lg font-semibold">Customization</div>
          <div className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolore?</div>
        </div>
        </div>
        </div>
      </div>
      <div className="flex h-[30vh] w-3/4 m-auto border-green-500 mt-2 flex-col p-2git">
        <div className="text-3xl font-semibold h-1/4">Our Featured Tours</div>
        <div className="grid grid-cols-4 border border-blue-500 w-full h-3/4">
          <div className="border border-red-500 w-1/4"></div>
          <div className="border border-red-500 w-1/4"></div>
          <div className="border border-red-500 w-1/4"></div>
          <div className="border border-red-500 w-1/4"></div>
          <div className="border border-red-500 w-1/4"></div>
          <div className="border border-red-500 w-1/4"></div>
          <div className="border border-red-500 w-1/4"></div>
          <div className="border border-red-500 w-1/4"></div>
        </div>
      </div>
      <div className="flex bg-blue-300 w-full h-[35vh] my-2">
        <div className="flex w-2/3 m-auto h-full">
        <div className="flex flex-col  border-black w-3/4 justify-evenly">
          <h1 className="text-3xl font-semibold">Subscribe now to get useful traveling information</h1>
          <div className="flex bg-white border-red-500 w-2/3 justify-between p-2">
          <input type="text" name="" id="" placeholder='Enter Your Email' className='outline-none bg-transparent'/>
          <button type="button" className='border-none font-white bg-orange-400 text-white rounded-md p-2'>Subscribe</button>
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur iusto id tempore consectetur esse.</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={Man} alt="" srcset="" className='h-full border-green-500'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Main