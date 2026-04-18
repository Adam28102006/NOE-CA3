import timetable from '@/data/timetable.json'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export default function TimetablePage() {
  // group items by day
  const grouped = days.reduce((acc, day) => {
    acc[day] = timetable.filter((item) => item.day === day)
    return acc
  }, {})

  return (
    <div>
      <h2>Weekly Timetable</h2>
      <p>Your class schedule.</p>

      <div className="timetable">
        <div className="timetable-header">
          {days.map((day) => (
            <div key={day} className="timetable-cell header">
              {day}
            </div>
          ))}
        </div>
        
        <div className="timetable-body">
          {days.map((day) => (
            <div key={day} className="timetable-column">
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
    </div>
  )
}
