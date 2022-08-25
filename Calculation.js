import '../App.css'

export function Calculate({ aplication }) {
  return (
    <div className="Calculate">
      {aplication.map(item => (
        <div className="calc">Profit percentage: {item}%</div>
      ))}
    </div>
  )
}
