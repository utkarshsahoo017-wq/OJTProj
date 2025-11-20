import React from 'react'
import logo from '../assets/logo.png'
import Light_Dark_Mode from '../assets/Light-Dark-Mode.png'
import noti from '../assets/noti.png'
import User from '../assets/User.png'

function Navbar() {
  return (
    <div className='relative z-10'>
      <nav>
        <div className='w-screen bg-[#111727] text-white p-2 flex items-center justify-between border-b border-y-gray-700'>
          <img src={logo} alt="" className='w-32 h-auto'/>
          <div className='flex items-center gap-2'>
          <button className='bg-white text-black rounded font-bold px-2 hover:cursor-pointer h-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0px_10px_10px_black]'>+ Add Transactions</button>
          <button className='hover:cursor-pointer'><img src={Light_Dark_Mode} alt="" className='invert w-8 h-auto border border-gray-300 rounded-full p-1.5'/></button>
          <button className='hover:cursor-pointer'><img src={noti} alt="" className='invert w-8 h-auto border border-gray-300 rounded-full p-1.5'/></button>
          <button className='hover:cursor-pointer'><img src={User} alt="" className='w-8 h-auto'/></button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
