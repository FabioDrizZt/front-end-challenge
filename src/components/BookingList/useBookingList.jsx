import { useState, useEffect } from 'react'

export default function useBookingList() {
  const [bookings, setBookings] = useState([])
  const [selectedBooking, setSelectedBooking] = useState(null)
  const url = 'https://654a58cae182221f8d5304a9.mockapi.io/data/Tickets'

  const fetchBookings = async () => {
    // Try to get data from local storage
    const storedBookings = JSON.parse(localStorage.getItem('bookingData')) || []

    // If there is no data in local storage, fetch data from the URL
    if (storedBookings.length === 0) {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        
        // Update local storage with fetched data
        localStorage.setItem('bookingData', JSON.stringify(data))

        // Update state with fetched data
        setBookings(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    } else {
      // If there is data in local storage, update state with that data
      setBookings(storedBookings)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchBookings()
    }, 1000)
  }, [])

  const handleItemClick = (index) => {
    const selected = bookings[index]
    setSelectedBooking(selected)
  }

  return { bookings, handleItemClick, selectedBooking }
}
