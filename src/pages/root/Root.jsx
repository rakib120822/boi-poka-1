import React from 'react'
import Navbar from '../../components/header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/footer/Footer'

function Root() {
  return (
    <div className='max-w-[1200px] mx-auto min-h-screen flex flex-col justify-between'>
      <Navbar/>
      <div className='flex-1'>
         <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Root
