import React from 'react';

const FormField = ({ label, type, name, value, onChange, required }) => (
  <label style={styles.label}>
    {label}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={styles.input}
      required={required}
    />
  </label>
);

const styles = {
  label: {
    display: 'block',
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
};

export default FormField;
