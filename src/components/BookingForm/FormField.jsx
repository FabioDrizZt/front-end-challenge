import styles from '../styles/styles'

const FormField = ({ label, type, name, value, onChange, required, error }) => (
  <div>
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
    {error && <span style={styles.error}>{error}</span>}
  </div>
)

export default FormField
