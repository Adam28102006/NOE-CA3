import { getAllClusteredEvents, getSimilarEvents } from "@/ml/eventcluster";

export default async function EventsPage() {
  const events = await getAllClusteredEvents();
  const similarToFirst = events.length
    ? await getSimilarEvents(events[0].id)
    : [];

  function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
  
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

            <p className="eventLocation">{event.location}</p>
            <p className="eventDesc">{event.description}</p>
          </div>
        ))}
      </div>

      <h2>Events similar to first event</h2>
      <ul>
        {similarToFirst.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </main>
  );
}
