import Link from 'next/link'
import AccessibilityToggle from '@/componants/acc_toggle'

export default function HomePage() {
  return (
    <main style={styles.page}>
      
      <div style={styles.topBar}>
        <h1 style={styles.title}>Campus Companion</h1>
        <AccessibilityToggle />
      </div>

      <section style={styles.hero}>
        <h2 style={styles.heading}>Stay organised, stay ahead 🎓</h2>
        <p style={styles.subtext}>
          Your all-in-one student hub for events, timetables, meals, and campus support.
        </p>
      </section>

      <section style={styles.grid}>
        <Link href="/events" style={styles.card}>
          <h3>Events</h3>
          <p>Discover what’s happening on campus</p>
        </Link>

        <Link href="/timetable" style={styles.card}>
          <h3>Timetable</h3>
          <p>Check your weekly class schedule</p>
        </Link>

        <Link href="/canteen" style={styles.card}>
          <h3>🍽 Canteen</h3>
          <p>See today’s menu options</p>
        </Link>

        <Link href="/lost-found" style={styles.card}>
          <h3> The Lost & Found</h3>
          <p>Find or report missing items</p>
        </Link>
      </section>
    </main>
  )
}
