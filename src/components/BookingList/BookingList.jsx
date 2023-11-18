import { useState, useEffect } from 'react'
import styles from '../styles/styles'

export default function BookingList() {
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

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Booking List</h2>

      {bookings.length === 0 ? (
        <p style={styles.loading}>Loading bookings...</p>
      ) : (
        <ul style={styles.list}>
          {bookings.map((booking, index) => (
            <li key={index} style={styles.listItem}>
              <div style={styles.info}>
                <span style={styles.label}>Origin:</span> {booking.origin}
              </div>
              <div style={styles.info}>
                <span style={styles.label}>Destination:</span>{' '}
                {booking.destination}
              </div>
              <div style={styles.info}>
                <span style={styles.label}>Passengers:</span>{' '}
                {booking.passengers}
              </div>
              <br />
              <div style={styles.info}>
                <span style={styles.label}>Date:</span> {booking.date}
              </div>
              <div style={styles.info}>
                <span style={styles.label}>Time:</span> {booking.time}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
