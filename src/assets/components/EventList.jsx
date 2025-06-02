import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'

function EventList() {

    const [events, setEvents] = useState([])

    const getEvents = async() => {
        const res = await fetch("https://eventprovider-ddh4hmd4fafhevcf.swedencentral-01.azurewebsites.net/api/events")

        if(res.ok) {
            const response = await res.json()
            console.log(response)
            setEvents(response)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <section id="events">
        {
            events.map(event => (<EventItem key={event.id} item={event} />))
        }
    </section>
  )
}

export default EventList