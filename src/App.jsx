import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Transactions from './components/Transactions'
import Analytics from './components/Analytics'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Dashboard />
        </div></>
    },
    {
      path: "/transactions",
      element: <><Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Transactions />
        </div></>
    },
    {
      path: "/analytics",
      element: <><Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div></>
    },
    {
      path: "/reports/trialBalance",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    },
    {
      path: "/reports/incomeStatement",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    },
    {
      path: "/reports/balanceSheet",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    },
    {
      path: "/reports/cashFlow",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    },
    {
      path: "/reports/Expense",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    },
    {
      path: "/reports/revenue",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    },
    {
      path: "/reports/awLed",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    },
    {
      path: "/reports/CR",
      element: <>
        <Navbar />
        <div className="flex mx-75 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div>
      </>
    }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
