import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Events from '../pages/Events'

function Navbar() {


  return (
    <nav className='navbar'>
      <NavLink to="/" className='ventixe-logo'>
        <img src="\images\Ventixe-logo.svg" alt="Ventixe logo" />
        <p>Ventixe</p>
      </NavLink>

      <div className='navlinks'>
        <NavLink to="/dashboard" className="navlink">
          <i class="fa-solid fa-table-columns"></i>
          <p className='navlink-text'>Dashboard</p>
        </NavLink>

        <NavLink to="/events" className="navlink">
          <i class="fa-solid fa-ticket"></i>
          <p className='navlink-text'>Events</p>
        </NavLink>

         <NavLink to="/events/create-event" className="navlink">
          <i class="fa-regular fa-plus"></i>
          <p className='navlink-text'>Create event</p>
        </NavLink>
      </div>  
    </nav>
  )
}

export default Navbar