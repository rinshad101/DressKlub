import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='flex flex-col flex-1 xl:ml-[350px]'>
        <AdminNavbar  />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
