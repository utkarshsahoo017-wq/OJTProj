import React from 'react'
import bg from "../assets/LandingBG.png";
import Logo from "../assets/logo.png"
import { ArrowRight } from 'lucide-react';

function LandingPage() {
  return (
    <div className="relative w-full h-screen bg-cover bg-no-repeat overflow-y-hidden" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 w-full h-full">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" className="w-40 h-auto m-3" />
          <div className="flex gap-2 mx-2">
            <button className='text-white bg-blue-500 px-2 py-1 rounded-xl text-xl font-semibold hover:cursor-pointer hover:scale-110 transition'>Log In</button>
            <button className='bg-white px-2 py-1 rounded-xl text-xl font-semibold hover:cursor-pointer hover:scale-110 transition'>Sign up</button>
          </div>
        </div>
        <div className="flex justify-center h-full">
          <div className="text-white text-6xl font-bold text-center mt-45">
            <span>Clear insights that empower</span><br />
            <span>your financial decisions</span>
            <div className='text-gray-500 text-xl font-semibold'>
              Take control, grow smarter, and plan your future with confidence.
            </div>
            <div className="flex justify-center">
              <button className="text-white bg-blue-500 text-xl flex items-center gap-1 p-2 rounded-xl font-semibold m-6 hover:cursor-pointer hover:-translate-y-0.5 transition hover:shadow-[0px_0px_10px_white]">Get Started <ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage