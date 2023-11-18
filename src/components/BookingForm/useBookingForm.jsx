import { useReducer, useEffect, useState } from 'react';
import formReducer, { ACTIONS } from './formReducer';

const useBookingForm = () => {
  const initialState = {
    origin: '',
    destination: '',
    passengers: 1,
    date: '',
    time: '',
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const [formErrors, setFormErrors] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('bookingData');
    if (storedData) {
      dispatch({ type: ACTIONS.SUBMIT_FORM, initialState: JSON.parse(storedData) });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: ACTIONS.SET_FIELD, field: name, value });
  };

  const validateForm = () => {
    const errors = [];

    // Basic non-empty validation
    if (!state.origin.trim()) {
      errors.push({ field: 'origin', message: 'Origin is required' });
    }
    if (!state.destination.trim()) {
      errors.push({ field: 'destination', message: 'Destination is required' });
    }
    if (!state.date) {
      errors.push({ field: 'date', message: 'Date is required' });
    }

    // Custom date validation (example: date should be in the future)
    const currentDate = new Date();
    const selectedDate = new Date(state.date);
    if (selectedDate < currentDate) {
      errors.push({ field: 'date', message: 'Please select a future date' });
    }

    setFormErrors(errors);
    return errors.length === 0; // Return true if there are no errors
  };

  const handleSubmit = () => {
    const existingTickets = JSON.parse(localStorage.getItem('bookingData')) || [];
    const updatedTickets = [...existingTickets, state];

    localStorage.setItem('bookingData', JSON.stringify(updatedTickets));
    dispatch({ type: ACTIONS.RESET_FORM, initialState });
  };

  return {
    state,
    formErrors,
    handleInputChange,
    handleSubmit,
  };
};

export default useBookingForm;
