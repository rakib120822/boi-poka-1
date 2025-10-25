import React from 'react'
import Navbar from '../../components/header/Navbar'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <div className='flex-1'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default AuthLayout
