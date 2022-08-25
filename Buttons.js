import '../App.css'

export function ChangeСurrency({ setDataMarket }) {
  return (
    <div className="btn">
      <button className="btn1" onClick={() => setDataMarket('BTCUSDT')}>
        BTC / USDT
      </button>
      <button className="btn2" onClick={() => setDataMarket('TRXUSDT')}>
        TRX / USDT
      </button>
      <button className="btn3" onClick={() => setDataMarket('ETHUSDT')}>
        ETH / USDT
      </button>
    </div>
  )
}
