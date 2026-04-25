'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header style={styles.header}>
      <h1>Campus Companion</h1>

      <nav aria-label="Main navigation">
        <ul style={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/timetable">Timetable</Link></li>
          <li><Link href="/canteen">Canteen</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#1e3a8a',
    color: 'white',
  },
  navList: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
    padding: 0,
    marginTop: '0.5rem',
  },
}
