import { useState, useEffect } from 'react'

export default function useBookingList() {
  const [bookings, setBookings] = useState([])
  const [selectedBooking, setSelectedBooking] = useState(null)

  const fetchBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem('bookingData')) || []
    setBookings(storedBookings)
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  const handleItemClick = (index) => {
    const selected = bookings[index]
    setSelectedBooking(selected)
  }

  return { bookings, handleItemClick, selectedBooking }
}
