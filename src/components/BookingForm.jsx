import React, { useReducer } from 'react';
import formReducer, { ACTIONS } from './formReducer';
import FormField from './FormField';
import SubmitButton from './SubmitButton';

const BookingForm = ({ onBookingSubmit }) => {
  const initialState = {
    origin: '',
    destination: '',
    passengers: 1,
    date: '',
    time: '',
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: ACTIONS.SET_FIELD, field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(state);
    dispatch({ type: ACTIONS.RESET_FORM, initialState });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <FormField
        label="Origin:"
        type="text"
        name="origin"
        value={state.origin}
        onChange={handleInputChange}
        required
      />

      <FormField
        label="Destination:"
        type="text"
        name="destination"
        value={state.destination}
        onChange={handleInputChange}
        required
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
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default BookingForm;
