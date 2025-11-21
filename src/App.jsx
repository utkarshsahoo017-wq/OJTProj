import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Transactions from './components/Transactions'

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
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
