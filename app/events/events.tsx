import events from '@/data/events.json'
import { formatDate } from '@/lib/utils'

export default function EventsPage() {
  return (
    <div>
      <h2>Campus Events</h2>

      <p>Upcoming student events and activities.</p>

      <div>
        {events.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.title}</h3>

            <p>
              {formatDate(event.date)}
            </p>

            <p>{event.location}</p>

            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
