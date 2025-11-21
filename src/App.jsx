import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Transactions from './components/Transactions'

function App() {

  return (
    <>
      <Navbar />
      <div className="flex mx-75 my-5 w-full">
        <Sidebar />
        {/* <Dashboard /> */}
        <Transactions />
      </div>
    </>
  )
}

export default App
