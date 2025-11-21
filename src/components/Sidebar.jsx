import React from 'react'
import dashboard from '../assets/dashboard.png'
import transaction from '../assets/transaction.png'
import analytics from '../assets/analytics.png'
import reports from '../assets/report.png'
import setting from '../assets/settings.png'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-60 bg-[#111727] mt-15 border-r border-gray-700'>
      <ul className="flex flex-col text-white p-5 text-xl gap-4 [&_li]:hover:bg-gray-700 [&_li]:p-2 [&_li]:rounded [&_li]:hover:cursor-pointer">
        <NavLink to="/" className={(e)=>e.isActive?"active":""}><li className='flex items-center gap-2'><img src={dashboard} alt="" className='invert w-4 h-4'/><span>Dashboard</span></li></NavLink>
        <NavLink to="/transactions" className={(e)=>e.isActive?"active":""}><li className='flex items-center gap-2'><img src={transaction} alt="" className='invert w-4 h-4'/><span>Transactions</span></li></NavLink>
        <NavLink to="/analytics"className={(e)=>e.isActive?"active":""}><li className='flex items-center gap-2'><img src={analytics} alt="" className='invert w-4 h-4'/><span>Analytics</span></li></NavLink>
        <NavLink to="/reports" className={(e)=>e.isActive?"active":""}><li className='flex items-center gap-2'><img src={reports} alt="" className='invert w-4 h-4'/><span>Reports</span></li></NavLink>
        <NavLink to="/settings" className={(e)=>e.isActive?"active":""}><li className='flex items-center gap-2'><img src={setting} alt="" className='invert w-4 h-4'/><span>Settings</span></li></NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
