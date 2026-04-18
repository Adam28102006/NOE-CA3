import Link from 'next/link'

import AccessibilityToggle from '@/componants/acc_toggle'

<AccessibilityToggle />

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to Campus Companion</h2>

      <p>
        This app helps first-year students stay organised and informed about campus life.
      </p>

      <section>
        <h3>Features</h3>
        <ul style={styles.list}>
          <li>
            <Link href="/events"> View Events</Link>
          </li>
          <li>
            <Link href="/timetable"> Check Timetable</Link>
          </li>
          <li>
            <Link href="/canteen"> Canteen Menu</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

const styles = {
  list: {
    lineHeight: '2rem',
  },
}
