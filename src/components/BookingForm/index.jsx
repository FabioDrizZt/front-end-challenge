import useBookingForm from './useBookingForm'
import FormField from './FormField'
import SubmitButton from './SubmitButton'
import styles from '../styles'

const BookingForm = () => {
  const { state, formErrors, handleInputChange, handleSubmit } =
    useBookingForm()

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <FormField
        label="Origin:"
        type="text"
        name="origin"
        value={state.origin}
        onChange={handleInputChange}
        required
        error={formErrors.find((error) => error.field === 'origin')?.message}
      />

      <FormField
        label="Destination:"
        type="text"
        name="destination"
        value={state.destination}
        onChange={handleInputChange}
        required
        error={
          formErrors.find((error) => error.field === 'destination')?.message
        }
      />

      <FormField
        label="Number of Passengers:"
        type="number"
        name="passengers"
        value={state.passengers}
        onChange={handleInputChange}
        min="1"
        required
      />

      <FormField
        label="Date:"
        type="date"
        name="date"
        value={state.date}
        onChange={handleInputChange}
        required
        error={formErrors.find((error) => error.field === 'date')?.message}
      />

      <FormField
        label="Time:"
        type="time"
        name="time"
        value={state.time}
        onChange={handleInputChange}
        required
      />

      <SubmitButton />
    </form>
  )
}

export default BookingForm
