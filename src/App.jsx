import './App.css'
import BookingForm from './components/BookingForm'

function App() {
  // Handle booking submission
  const handleBookingSubmit = (bookingData) => {
    // Implement logic to save the booking data to localStorage or handle as needed
    console.log('Booking Submitted:', bookingData)
  }

  return (
    <div>
      <h1>Bus Ticket Booking</h1>
      <BookingForm onBookingSubmit={handleBookingSubmit} />
    </div>
  )
}

export default App
