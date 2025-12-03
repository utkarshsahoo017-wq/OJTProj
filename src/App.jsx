import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Transactions from './components/Transactions'
import Analytics from './components/Analytics'
import IncomeStatement from './components/IncomeStatement'
import ExpenseReport from './components/ExpenseReport'
import RevenueReport from './components/RevenueReport'
import AccountWiseLedger from './components/AccountWiseLedger'
import CustomReport from './components/CustomReport'
import Settings from './components/Settings'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/loginPage",
      element: <LoginPage />
    },
    {
      path: "/signupPage",
      element: <SignupPage />
    },
    {
      path: "/dashboard",
      element: <><Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <Dashboard />
        </div></>
    },
    {
      path: "/transactions",
      element: <><Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <Transactions />
        </div></>
    },
    {
      path: "/analytics",
      element: <><Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <Analytics />
        </div></>
    },
    {
      path: "/reports/incomeStatement",
      element: <>
        <Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <IncomeStatement />
        </div>
      </>
    },
    {
      path: "/reports/Expense",
      element: <>
        <Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <ExpenseReport />
        </div>
      </>
    },
    {
      path: "/reports/revenue",
      element: <>
        <Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <RevenueReport />
        </div>
      </>
    },
    {
      path: "/reports/awLed",
      element: <>
        <Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <AccountWiseLedger />
        </div>
      </>
    },
    {
      path: "/reports/CR",
      element: <>
        <Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <CustomReport />
        </div>
      </>
    },
    {
      path: "/settings",
      element: <>
        <Navbar />
        <div className="flex mx-70 my-5 w-full">
          <Sidebar />
          <Settings />
        </div>
      </>
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App