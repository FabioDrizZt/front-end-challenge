import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BookingForm from './components/BookingForm'
import BookingList from './components/BookingList'
import Navigation from './components/Navitaion'
import './App.css'

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BookingForm />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
