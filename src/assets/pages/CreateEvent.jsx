import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateEvent() {

    const [formData, setFormData] = useState({name: "", description: "", arena: "", city: "", state: "", eventDate: "", imagePath: ""})
    const navigate = useNavigate()


    const postCreateEvent = async () => {

        const finalFormData = {
            ...formData,
            eventDate: formData.eventDate ? formData.eventDate + ":00" : null
        };

        try {
            const res = await fetch(`https://eventprovider-ddh4hmd4fafhevcf.swedencentral-01.azurewebsites.net/api/Events`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(finalFormData)
            })

            if(!res.ok) {
                console.error("Create event failed")
            } else {
                console.log("Event created successfully")
                navigate('/')
            }
        } catch (error) {
            console.error("Error submitting Create-event form", error)
        }  
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postCreateEvent()
    }

  return (
    

    <form className='create-event-form' noValidate onSubmit={handleSubmit}>
         <h4>Create Event </h4>
         <div className='input-group'>
             <label>Event name</label>
             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
         </div>
         <div className='input-group'>
             <label>Description</label>
             <input type="text" name="description" value={formData.description} onChange={handleChange} required  />
         </div>
         <div className='input-group'>
             <label>Arena</label>
             <input type="text" name="arena" value={formData.arena} onChange={handleChange} required  />
         </div>
         <div className='input-group'>
             <label>City</label>
             <input type="text" name="city" value={formData.city} onChange={handleChange} required  />
         </div>
         <div className='input-group'>
             <label>State</label>
             <input type="text" name="state" value={formData.state} onChange={handleChange} required  />
         </div>
         <div className='input-group'>
             <label>Date and time</label>
             <input type="datetime-local" name="eventDate" value={formData.eventDate} onChange={handleChange} required  />
         </div>
         <div className='input-group mb-2'>
             <label>Event Image URL</label>
            <input type="text" name="imagePath" value={formData.imagePath} onChange={handleChange} required  />
         </div>
       <button className='btn btn-primary mb-3' type='submit'>Create event</button>
     </form>   
  )
}

export default CreateEvent