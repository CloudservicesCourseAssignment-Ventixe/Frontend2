import React from 'react'
import Nav from '../components/Navbar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


function PortalLayout() {


  return (
    <div className='portal-wrapper'>
        <Nav />
        <Header />
        <main className='main'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PortalLayout