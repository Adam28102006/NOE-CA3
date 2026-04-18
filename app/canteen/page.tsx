import canteen from '@/data/canteen.json'

export default function CanteenPage() {
  return (
    <main className="page">
    
      <div className="pageHeader">
        <h2>Canteen Menu</h2>
        <p>Today’s available food and drinks</p>
      </div>

    
      <div className="menuGrid">
        {canteen.map((item) => (
          <div key={item.id} className="menuCard">
            <div className="menuTop">
              <h3>{item.item}</h3>
              <span className="price">€{item.price.toFixed(2)}</span>
            </div>

            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>
    </main>
  )
}
