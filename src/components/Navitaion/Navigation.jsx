import { Link } from 'react-router-dom'
import styles from '../styles/styles'

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/bookings" style={styles.navLink}>
            Bookings
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
