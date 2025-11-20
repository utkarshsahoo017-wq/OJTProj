import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  )
}

export default App
