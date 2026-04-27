import events from '@/data/events.json'
import { formatDate } from '@/lib/utils'
import { GetServerSideProps } from 'next';
import { getAllClusteredEvents, getSimilarEvents, Event } from '../ml/eventCluster';

interface EventsPageProps {
  events: Event[];
  similarToFirst: Event[];
}

export default function EventsPage({ events, similarToFirst }: EventsPageProps) {
  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            {e.title} - Cluster {e.cluster}
          </li>
        ))}
      </ul>

      <h2>Events similar to first event</h2>
      <ul>
        {similarToFirst.map(e => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const events = getAllClusteredEvents();
  const similarToFirst = getSimilarEvents(events[0].id);

  return { props: { events, similarToFirst } };
};



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
