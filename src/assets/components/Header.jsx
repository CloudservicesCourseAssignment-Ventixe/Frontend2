import React from 'react'
import { useLocation } from 'react-router-dom';

function Header() {
  //Bilder och ikoner kraschar ibland, särskilt av part.startswith

  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname.toLowerCase();

    if (path === '/events') return 'Events';
    if (path === '/events/create-event') return 'Create Event';
    if (path.startsWith('/events/booking/')) return 'Book Event';                              
    if (path.startsWith('/events/') && !path.includes('/booking')) return 'Event Details';     
    if (path === '/dashboard') return 'Dashboard';

    return '';
  };



  return (
    <header className='header'>
      <h4>{getPageTitle()}</h4>
      <div className='d-flex'>
        <div className='header-icons'>
          <div className='header-icon'>
            <img src="\images\notification-icon.svg" alt="notification icon" />
          </div>
          <div className='header-icon'>
            <img src="\images\settings-icon.svg" alt="settings icon" />
          </div>
        </div>

        
        <div className='header-account-info'>
          <div className='user-picture'>
            <img src="\images\Avatar1.svg" alt="user profile picture" />
          </div>
          <p className='user-name'>Jessica Eriksson</p>
          <p className='user-role'>Admin</p>
        </div>
      </div>
    </header>
  )
}

export default Header