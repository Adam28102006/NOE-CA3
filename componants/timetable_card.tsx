type TimetableItem = {
  id: number
  module: string
  day: string
  time: string
  room: string
}

export default function TimetableCard({ item }: { item: TimetableItem }) {
  return (
    <div className="card">
      <h3>{item.module}</h3>

      <p>{item.day}</p>
      <p>{item.time}</p>
      <p>{item.room}</p>
    </div>
  )
}
