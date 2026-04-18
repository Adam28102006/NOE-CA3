import { formatDate } from '@/lib/utils'

type Event = {
  id: number
  title: string
  date: string
  location: string
  description: string
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="card">
      <h3>{event.title}</h3>

      <p>{formatDate(event.date)}</p>
      <p>{event.location}</p>

      <p>{event.description}</p>
    </div>
  )
}
