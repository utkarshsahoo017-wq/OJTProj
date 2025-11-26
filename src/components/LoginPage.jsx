import React from 'react'
import bg from "../assets/LandingBG.png";
import Logo from "../assets/logo.png"
import { BriefcaseBusiness } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="relative w-full h-screen bg-cover bg-no-repeat overflow-y-hidden" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <img src={Logo} alt="" className="w-40 h-auto m-3 relative z-10" />
            <div className="relative z-10 w-full h-auto flex justify-center mt-40">
                <div className="text-white bg-[#1e2844]/50 w-2xl h-auto p-3 rounded-xl border-2 border-gray-500 font-semibold text-3xl flex flex-col gap-3">
                    <div className="flex gap-2 items-end justify-center">
                        Secure Access to Your Ledger <BriefcaseBusiness size={30} />
                    </div>
                    <div className="input flex flex-col gap-4 mt-10 items-center">
                        <input type="text" placeholder='Enter username' className='text-white text-lg border border-gray-500 rounded-full px-4 py-1 placeholder:font-light font-light w-3/4' />
                        <input type="password" placeholder='Enter password' className='text-white text-lg border border-gray-500 rounded-full px-4 py-1 placeholder:font-light font-light w-3/4' />
                    </div>
                    <div className="buttons flex flex-col items-center text-xl gap-2">
                        <NavLink to="/dashboard" className='bg-blue-500 rounded-full w-1/3 border-2 border-blue-300 py-1 hover:cursor-pointer hover:shadow-[0px_0px_5px_white] transition text-center'><button>Login</button></NavLink>
                        <span className='text-white text-xs font-light hover:cursor-pointer'>Don't have an account? Signup here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
