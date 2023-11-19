import styles from '../styles'

export default function Modal({ children, onClose }) {
  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        {children}
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
