import Link from 'next/link'
import AccessibilityToggle from '@/componants/acc_toggle'

export default function HomePage() {
  return (
    <main className="page">
      <div className="topBar">
        <h1 className="title">Campus Companion</h1>
        <AccessibilityToggle />
      </div>

      <section className="hero">
        <h2>Stay organised, stay ahead 🎓</h2>
        <p>
          Your all-in-one student hub for events, timetables, meals, and campus support.
        </p>
      </section>

      <section className="grid">
        <Link href="/events" className="card">
          <h3>Events</h3>
          <p>Discover what’s happening on campus</p>
        </Link>

        <Link href="/timetable" className="card">
          <h3>Timetable</h3>
          <p>Check your weekly class schedule</p>
        </Link>

        <Link href="/canteen" className="card">
          <h3>Canteen</h3>
          <p>See today’s menu options</p>
        </Link>
      </section>
    </main>
  )
}
