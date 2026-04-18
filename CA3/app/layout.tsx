import '../Styles/Globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Campus Companion',
  description: 'A helpful campus app for students'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={styles.header}>
          <h1>Campus Companion</h1>

          <nav aria-label="Main navigation">
            <ul style={styles.navList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/timetable">Timetable</Link></li>
              <li><Link href="/canteen">Canteen</Link></li>
              <li><Link href="/lost-found">Lost & Found</Link></li>
            </ul>
          </nav>
        </header>

        <main style={styles.main}>
          {children}
        </main>
      </body>
    </html>
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
  main: {
    padding: '1.5rem',
  },
}