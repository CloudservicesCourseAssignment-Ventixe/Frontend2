import React from 'react'
import { Link } from 'react-router-dom'

function EventItem({item}) {
  return (
      <Link to={`/events/${item.id}`}>
        <div className='event-card'>
          <div className='event-picture'>
            {item.imagePath?.trim() ? (
              <img src={item.imagePath} alt="event" />
            ) : (
              <div className='no-image'>No image</div>
            )}
          </div>
          <p className='event-datetime'>{new Date(item.eventDate).toLocaleString()}</p>
          <p className='event-name'>{item.name}</p>
          <div className='event-location'>
            <div className='map-pin'>
              <img src="\images\MapPin.svg" alt="" />
            </div>
            <p className='event-location-text'>{item.eventAddress.arena}, {item.eventAddress.city}, {item.eventAddress.state}</p>
          </div>
        </div>
      </Link>
  )
}

export default EventItem
