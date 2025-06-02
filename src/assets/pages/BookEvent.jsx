import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function BookEvent() {

    const {id} = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({eventId: id, firstName: "", lastName: "", email: "", streetName: "", postalCode: "", city: "", ticketQuantity: 1})
    const navigate = useNavigate()
    
    useEffect(() => {
            getEvent()
        }, [])

    const getEvent = async () => {
        try {
            const res = await fetch(`https://eventprovider-ddh4hmd4fafhevcf.swedencentral-01.azurewebsites.net/api/Events/${id}`)
            if(!res.ok) throw new Error("Failed to fetch event")

            const response = await res.json()
            setEvent(response)
        } catch (error) {
            console.error(error)
        }
    }

    const postBooking = async () => {

        try {
            const res = await fetch(`https://bookingprovider-cnedbbgvc4eta4dk.swedencentral-01.azurewebsites.net/api/bookings`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
            })

            if(!res.ok) {
                console.error("Booking failed")
            } else {
                console.log("Booking successful")
                navigate('/')
            }
        } catch (error) {
            console.error("Error submitting booking", error)
        }  
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postBooking()
    }

  



  return (
    <div className='book-event-page'>

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
                    <img src="\images\MapPin.svg" alt="map pin icon" />
                    <p>{event.eventAddress?.arena}, {event.eventAddress?.city}, {event.eventAddress?.state}</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="about-div">
                <p className="about-title">About Event</p>
                <p className="about-text">{event.description}</p>
                </div>
            </div>

            
            <form className='book-event-form' noValidate onSubmit={handleSubmit}>
                <h4>Book Event - {event.name}</h4>
                <div className='input-group'>
                    <label>First name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className='input-group'>
                    <label>Last name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required  />
                </div>
                <div className='input-group'>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required  />
                </div>
                <div className='input-group'>
                    <label>Street name</label>
                    <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required  />
                </div>
                <div className='input-group'>
                    <label>Postal Code</label>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required  />
                </div>
                <div className='input-group mb-2'>
                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required  />
                </div>
                <button className='btn btn-primary mb-3' type='submit'>Book now</button>
            </form>   
        </div>
    </div>
  )
}

export default BookEvent


