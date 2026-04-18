import timetable from '@/data/timetable.json'

type TimetableItem = {
  id: number
  module: string
  day: string
  time: string
  room: string
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const

type Day = typeof days[number]

export default function TimetablePage() {
  const grouped = days.reduce((acc, day) => {
    acc[day] = (timetable as TimetableItem[]).filter(
      (item) => item.day === day
    )
    return acc
  }, {} as Record<Day, TimetableItem[]>)

  return (
    <div>
      <h2>Weekly Timetable</h2>
      <p>Your class schedule.</p>

      <div className="timetable-body">
        {days.map((day) => (
          <div key={day} className="timetable-column">
            <h3>{day}</h3>

            {grouped[day].length > 0 ? (
              grouped[day]
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((item) => (
                  <div key={item.id} className="timetable-card">
                    <strong>{item.module}</strong>
                    <div>{item.time}</div>
                    <div>{item.room}</div>
                  </div>
                ))
            ) : (
              <div className="timetable-empty">—</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
