import events from '@/data/events.json'
import { formatDate } from '@/lib/utils'

export default function EventsPage() {
  return (
    <main className="page">
     
      <div className="pageHeader">
        <h2>Campus Events</h2>
        <p>Upcoming student events and activities</p>
      </div>
      
      <div className="eventGrid">
        {events.map((event) => (
          <div key={event.id} className="eventCard">
            <div className="eventTop">
              <h3>{event.title}</h3>
              <span className="eventDate">{formatDate(event.date)}</span>
            </div>

            <p className="eventLocation"> {event.location}</p>
            <p className="eventDesc">{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
