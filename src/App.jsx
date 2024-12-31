import React from 'react'
import Home from './pages/Home'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Collection from './pages/Collection'
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
