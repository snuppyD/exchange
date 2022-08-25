import '../App.css'

export function Depths({ info }) {
  if (info.name === 'Binance') {
    return (
      <div className="content">
        <div className="binance-data">
          <div className="header">
            <h1>{info.name}</h1>
          </div>
          <div className="binance-name">
            <p className="binance-price">Price</p>
            <p className="binance-volume">Volume</p>
          </div>
          {info.depths.asks.map(elem => (
            <div className="binance-data-content">
              <div className="binance-ask-price">{elem[0]}</div>
              <div className="binance-ask-volume">{elem[1]}</div>
            </div>
          ))}
          {info.depths.bids.map(elem => (
            <div className="binance-data-content">
              <div className="binance-bids-price">{elem[0]}</div>
              <div className="binance-bids-volume">{elem[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  } else if (info.name === 'Kuna') {
    return (
      <div className="content">
        <div className="kuna-data">
          <div className="header2">
            <h1>{info.name}</h1>
          </div>
          <div className="kuna-name"></div>
          <div className="kuna-name">
            <p className="kuna-price">Price</p>
            <p className="kuna-volume">Volume</p>
          </div>
          {info.depths.asks.map(elem => (
            <div className="kuna-data-content">
              <div className="kuna-ask-price">{elem[0].toFixed(5)}</div>
              <div className="kuna-ask-volume">{elem[1].toFixed(5) * -1}</div>
            </div>
          ))}
          {info.depths.bids.map(elem => (
            <div className="kuna-data-content">
              <div className="kuna-bids-price">{elem[0].toFixed(5)}</div>
              <div className="kuna-bids-volume">{elem[1].toFixed(5)}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
