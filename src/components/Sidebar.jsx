import React from 'react'
import { useState } from 'react'
import dashboard from '../assets/dashboard.png'
import transaction from '../assets/transaction.png'
import analytics from '../assets/analytics.png'
import reports from '../assets/report.png'
import setting from '../assets/settings.png'
import { NavLink } from 'react-router-dom'
import { ChevronDown, ChevronRight, Scale, DollarSign, Wallet, TrendingUp, TrendingDown, PieChart, BookOpen, Calendar } from 'lucide-react'

function Sidebar() {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  return (
    <div className='fixed top-0 left-0 h-screen w-60 bg-[#111727] mt-15 border-r border-gray-700'>
      <ul className="flex flex-col text-white p-5 text-xl gap-2 [&_li]:hover:bg-gray-700 [&_li]:p-2 [&_li]:rounded-2xl [&_li]:hover:cursor-pointer">
        <NavLink to="/dashboard" className={(e) => e.isActive ? "active" : ""}><li className='flex items-center gap-2'><img src={dashboard} alt="" className='invert w-4 h-4' /><span>Dashboard</span></li></NavLink>
        <NavLink to="/transactions" className={(e) => e.isActive ? "active" : ""}><li className='flex items-center gap-2'><img src={transaction} alt="" className='invert w-4 h-4' /><span>Transactions</span></li></NavLink>
        <NavLink to="/analytics" className={(e) => e.isActive ? "active" : ""}><li className='flex items-center gap-2'><img src={analytics} alt="" className='invert w-4 h-4' /><span>Analytics</span></li></NavLink>
        <li onClick={() => setIsReportsOpen(!isReportsOpen)} className='flex items-center gap-2 justify-between'>
          <div className="items flex items-center gap-2">
            <img src={reports} className='invert w-4 h-4' />
            <span>Reports</span>
          </div>
          {isReportsOpen ? (
            <ChevronDown color='white' size={18} />
          ) : (
            <ChevronRight color='white' size={18} />
          )}
        </li>

        {isReportsOpen && (
          <div className="ml-3 flex flex-col gap-2 text-sm w-full ">
            <NavLink to="/reports/incomeStatement" className={(e) => e.isActive ? "active" : ""}>
              {({ isActive }) => (
                <div className={`flex w-full rounded ${isActive ? "bg-white text-black" : "hover:bg-gray-700"
                  }`}>
                  <span
                    className={'cursor-pointer px-2 py-1 rounded flex gap-1'}
                  >
                    <DollarSign color={isActive ? "black" : "white"} size={20} />
                    Income Statement(P&L)
                  </span>
                </div>
              )}
            </NavLink>
            <NavLink to="/reports/Expense" className={(e) => e.isActive ? "active" : ""}>
              {({ isActive }) => (
                <div className={`flex w-full rounded ${isActive ? "bg-white text-black" : "hover:bg-gray-700"
                  }`}>
                  <span
                    className={'cursor-pointer px-2 py-1 rounded flex gap-1'}
                  >
                    <TrendingDown color={isActive ? "black" : "white"} size={20} />
                    Expense Report
                  </span>
                </div>
              )}
            </NavLink>
            <NavLink to="/reports/revenue" className={(e) => e.isActive ? "active" : ""}>
              {({ isActive }) => (
                <div className={`flex w-full rounded ${isActive ? "bg-white text-black" : "hover:bg-gray-700"
                  }`}>
                  <span
                    className={'cursor-pointer px-2 py-1 rounded flex gap-1'}
                  >
                    <PieChart color={isActive ? "black" : "white"} size={20} />
                    Revenue Report
                  </span>
                </div>
              )}
            </NavLink>
            <NavLink to="/reports/awLed" className={(e) => e.isActive ? "active" : ""}>
              {({ isActive }) => (
                <div className={`flex w-full rounded ${isActive ? "bg-white text-black" : "hover:bg-gray-700"
                  }`}>
                  <span
                    className={'cursor-pointer px-2 py-1 rounded flex gap-1'}
                  >
                    <BookOpen color={isActive ? "black" : "white"} size={20} />
                    Account-wise Ledger
                  </span>
                </div>
              )}
            </NavLink>
            <NavLink to="/reports/CR" className={(e) => e.isActive ? "active" : ""}>
              {({ isActive }) => (
                <div className={`flex w-full rounded ${isActive ? "bg-white text-black" : "hover:bg-gray-700"
                  }`}>
                  <span
                    className={'cursor-pointer px-2 py-1 rounded flex gap-1'}
                  >
                    <Calendar color={isActive ? "black" : "white"} size={20} />
                    Custom report
                  </span>
                </div>
              )}
            </NavLink>
          </div>
        )}
        <NavLink to="/settings" className={(e) => e.isActive ? "active" : ""}><li className='flex items-center gap-2'><img src={setting} alt="" className='invert w-4 h-4' /><span>Settings</span></li></NavLink>
      </ul>
    </div>
  )
}

export default Sidebar