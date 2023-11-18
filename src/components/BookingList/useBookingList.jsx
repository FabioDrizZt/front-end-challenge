import { useState, useEffect } from 'react'

export default function useBookingList() {
  const [bookings, setBookings] = useState([])

  const fetchBookings = () => {
    setTimeout(() => {
      const storedBookings =
        JSON.parse(localStorage.getItem('bookingData')) || []
      setBookings(storedBookings)
    }, 1000)
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  return { bookings }
}
