import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EventDetails() {

  const {id} = useParams()
  const [event, setEvent] = useState({})

  const getEvent = async () => {
    const res = await fetch(`https://eventprovider-ddh4hmd4fafhevcf.swedencentral-01.azurewebsites.net/api/Events/${id}`)

    if (res.ok) {
      const response = await res.json()
      setEvent(response)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])



  return (
    <div className='event-details-card'>
      <div className="event-picture">
        {event.imagePath?.trim() ? (
          <img src={event.imagePath} alt="event" />
        ) : (
          <div className='no-image'>No image</div>
        )}
      </div>
      <div className="event-details-info">
        <h6>{event.name}</h6>
        <div className="event-details-time-location-div">
          <div className="event-details-timedate">
            <img src="\images\calender-icon.svg" alt="calender icon" />
            <p>{new Date(event.eventDate).toLocaleString()}</p>
          </div>
            <div className="event-details-location">
              <img src="\images\MapPin.svg" alt="" />
              <p>{event.eventAddress?.arena}, {event.eventAddress?.city}, {event.eventAddress?.state}</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-div">
          <p className="about-title">About Event</p>
          <p className="about-text">{event.description}</p>
        </div>
          <Link className="btn btn-primary" to={`/events/booking/${id}`}>Book event</Link>  
      </div>
    
    </div>
  )
}

export default EventDetails