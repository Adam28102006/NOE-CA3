import timetable from '@/data/timetable.json'

export default function TimetablePage() {
  return (
    <div>
      <h2>Weekly Timetable</h2>

      <p>Your class schedule.</p>

      <div>
        {timetable.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.module}</h3>

            <p>{item.day}</p>
            <p>{item.time}</p>
            <p>{item.room}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
