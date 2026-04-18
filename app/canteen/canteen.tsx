import canteen from '@/data/canteen.json'

export default function CanteenPage() {
  return (
    <div>
      <h2>Canteen Menu</h2>

      <p>Today’s available food and drinks.</p>

      <div>
        {canteen.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.item}</h3>

            <p>💰 €{item.price.toFixed(2)}</p>
            <p>🍽 {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
