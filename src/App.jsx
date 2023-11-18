import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BookingForm from './components/BookingForm/BookingForm'
import BookingList from './components/BookingList/BookingList'
import Navigation from './components/Navitaion/Navigation'
import './App.css'

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BookingForm/>} />
          <Route path="/bookings" element={<BookingList/>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
