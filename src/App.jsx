import './App.css'
import CenterLayout from './assets/layouts/CenterLayout.jsx'
import SignUp from './assets/pages/SignUp.jsx'
import SignIn from './assets/pages/SignIn.jsx'
import PortalLayout from './assets/layouts/PortalLayout.jsx'
import Events from './assets/pages/Events.jsx'
import EventDetails from './assets/pages/EventDetails.jsx'
import { Route, Routes } from 'react-router-dom'
import BookEvent from './assets/pages/BookEvent.jsx'
import Dashboard from './assets/pages/Dashboard.jsx'
import CreateEvent from './assets/pages/CreateEvent.jsx'


function App() {
  return (
    <Routes>
      {/* Sidor som använder CenterLayout */}
      <Route element={<CenterLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Sidor som använder PortalLayout */}
      <Route element={<PortalLayout />}>
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/booking/:id" element={<BookEvent />} />
        <Route path="/events/create-event" element={< CreateEvent/>} />
        <Route path="/dashboard" element={< Dashboard/>} />
        {/* Om du vill visa Events även på "/" */}
        <Route path="/" element={<Events />} />
      </Route>
    </Routes>
  )
}

export default App