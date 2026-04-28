import canteen from '@/data/canteen.json'
import AccessibilityToggle from '@/componants/acc_toggle'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const

type Day = typeof days[number]

type CanteenItem = {
  id: string
  day: Day
  item: string
  price: number
  category: string
}

export default function CanteenPage() {
  const grouped = days.reduce((acc, day) => {
    acc[day] = (canteen as CanteenItem[]).filter(
      (item) => item.day === day
    )
    return acc
  }, {} as Record<Day, CanteenItem[]>)

  return (
    <main className="page">
      <div className="pageHeader">
        <h2>Canteen Menu</h2>
        <AccessibilityToggle />
        <p>Weekly food and drink options</p>
      </div>

      <div className="menuGrid">
        {days.map((day) => (
          <div key={day} className="menuColumn">
            <h3>{day}</h3>

            {grouped[day].length > 0 ? (
              grouped[day].map((item) => (
                <div key={item.id} className="menuCard">
                  <div className="menuTop">
                    <h3>{item.item}</h3>
                    <span className="price">€{item.price.toFixed(2)}</span>
                  </div>

                  <span className="category">{item.category}</span>
                </div>
              ))
            ) : (
              <div className="menuEmpty">—</div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
