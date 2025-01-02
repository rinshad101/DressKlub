import React from 'react'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
