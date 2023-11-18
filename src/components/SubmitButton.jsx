import React from 'react';

const SubmitButton = () => (
  <button type="submit" style={styles.button}>
    Book Now
  </button>
);

const styles = {
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SubmitButton;
