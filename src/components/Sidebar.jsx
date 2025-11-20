import React from 'react'
import dashboard from '../assets/dashboard.png'
import transaction from '../assets/transaction.png'
import analytics from '../assets/analytics.png'
import reports from '../assets/report.png'
import setting from '../assets/settings.png'

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-60 bg-[#111727] mt-15'>
      <ul className="flex flex-col text-white p-5 text-xl gap-4">
        <li className='flex items-center gap-2'><img src={dashboard} alt="" className='invert w-4 h-4'/><span>Dashboard</span></li>
        <li className='flex items-center gap-2'><img src={transaction} alt="" className='invert w-4 h-4'/><span>Transactions</span></li>
        <li className='flex items-center gap-2'><img src={analytics} alt="" className='invert w-4 h-4'/><span>Analytics</span></li>
        <li className='flex items-center gap-2'><img src={reports} alt="" className='invert w-4 h-4'/><span>Reports</span></li>
        <li className='flex items-center gap-2'><img src={setting} alt="" className='invert w-4 h-4'/><span>Settings</span></li>
      </ul>
    </div>
  )
}

export default Sidebar
