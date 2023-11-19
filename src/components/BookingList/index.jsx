import useBookingList from './useBookingList'
import BookingDetails from '../BookingDetails'
import Modal from './Modal'
import useModal from './useModal'
import styles from '../styles'

export default function BookingList() {
  const { bookings, handleItemClick, selectedBooking } = useBookingList()
  const { isModalOpen, openModal, closeModal } = useModal()

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
                onClick={() => {
                  handleItemClick(index)
                  openModal()
                }}
              >
                <div style={styles.info}>
                  <span style={styles.label}>ID:</span> {booking.id}
                </div>
                <div style={styles.info}>
                  <span style={styles.label}>Date:</span> {booking.date}
                </div>
                <div style={styles.info}>
                  <span style={styles.label}>Time:</span> {booking.time}
                </div>
              </li>
            ))}
          </ul>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <BookingDetails booking={selectedBooking} />
            </Modal>
          )}
        </div>
      )}
    </div>
  )
}
