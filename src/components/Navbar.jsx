import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Light_Dark_Mode from '../assets/Light-Dark-Mode.png'
import User from '../assets/User.png'
import TransactionModel from './TransactionModel'

function Navbar() {

  const [openModel, setOpenModel] = useState(false)

  function logout() {
    localStorage.removeItem("token")
    window.location.href = '/'
  }
  return (
    <div className='z-10 fixed top-0 left-0'>
      {openModel && <TransactionModel close={() => setOpenModel(false)} />}
      <nav>
        <div className='w-screen bg-[#111727] text-white p-2 flex items-center justify-between border-b border-y-gray-700'>
          <img src={logo} alt="" className='w-32 h-auto' />
          <div className='flex items-center gap-2'>
            <button className='bg-white text-black rounded-2xl px-2 hover:cursor-pointer h-7 transition-all duration-200 font-semibold hover:-translate-y-0.5 hover:shadow-[0px_10px_10px_black]' onClick={()=>setOpenModel(true)}>+ Add Transactions</button>
            <button className='hover:cursor-pointer'><img src={Light_Dark_Mode} alt="" className='invert w-8 h-auto border border-gray-300 rounded-full p-1.5' /></button>
            <button className='hover:cursor-pointer'><img src={User} alt="" className='w-8 h-auto' /></button>
            <button className='bg-red-500 text-white rounded px-2 hover:cursor-pointer h-7 transition-all duration-200 font-semibold hover:-translate-y-0.5 hover:shadow-[0px_10px_10px_black]' onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
