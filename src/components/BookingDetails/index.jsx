const BookingDetails = ({ booking }) => {
  return (
    <div>
      <h2>Booking Details</h2>
      {booking ? (
        <div>
          <p>
            <strong>Origin:</strong> {booking.origin}
          </p>
          <p>
            <strong>Destination:</strong> {booking.destination}
          </p>
          <p>
            <strong>Passengers:</strong> {booking.passengers}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Time:</strong> {booking.time}
          </p>
        </div>
      ) : (
        <p>No booking selected.</p>
      )}
    </div>
  )
}

export default BookingDetails
