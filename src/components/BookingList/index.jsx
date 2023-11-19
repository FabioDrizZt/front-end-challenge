import useBookingList from './useBookingList'
import BookingDetails from '../BookingDetails'
import styles from '../styles/styles'

export default function BookingList() {
  const { bookings, handleItemClick, selectedBooking } = useBookingList()

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Booking List</h2>

      {bookings.length === 0 ? (
        <p style={styles.loading}>Loading bookings...</p>
      ) : (
        <div>
          <ul style={styles.list}>
            {bookings.map((booking, index) => (
              <li
                key={index}
                title="See Details"
                style={styles.listItem}
                onClick={() => handleItemClick(index)}
              >
                {/* Some details are hidden to show them in BookingDetails
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
                </div> */}
                <div style={styles.info}>
                  <span style={styles.label}>Date:</span> {booking.date}
                </div>
                <div style={styles.info}>
                  <span style={styles.label}>Time:</span> {booking.time}
                </div>
              </li>
            ))}
          </ul>
          <BookingDetails booking={selectedBooking} />
        </div>
      )}
    </div>
  )
}
