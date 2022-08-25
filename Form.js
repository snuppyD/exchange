import '../App.css'
import { useState } from 'react'

export function Forms({ data }) {
  const [price, setPrice] = useState(data.depths.asks[0][0])
  const [amount, setAmount] = useState('')
  const [total, setTotal] = useState('')
  return (
    <div className="frm">
      <div className="form-input">
        <div>
          <p className="input-name">Price USDT</p>
          <input
            className="Input"
            type="number"
            value={price}
            onChange={e => {
              setPrice(e.target.value)
            }}
          />
        </div>

        <div>
          <p className="input-name">Amount BTC</p>
          <input
            className="Input"
            type="number"
            value={amount}
            onChange={e => {
              setAmount(e.target.value)
              setTotal(price * e.target.value)
            }}
          />
        </div>

        <div>
          <p className="input-name">Total</p>
          <input
            className="Input"
            type="number"
            value={total}
            onChange={e => {
              setTotal(e.target.value)
              setAmount(e.target.value / price)
            }}
          />
        </div>
        <div>
          <button>Buy</button>
        </div>
      </div>
      <div className="form-input2">
        <div>
          <p className="input-name">Price USDT</p>
          <input className="Input" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </div>

        <div>
          <p className="input-name">Amount BTC</p>
          <input
            className="Input"
            type="number"
            value={amount}
            onChange={e => {
              setAmount(e.target.value)
              setTotal(price * e.target.value)
            }}
          />
        </div>

        <div>
          <p className="input-name">Total</p>
          <input
            className="Input"
            type="number"
            value={price * amount}
            onChange={e => {
              setTotal(e.target.value)
              setAmount(e.target.value / price)
            }}
          />
        </div>
        <div>
          <button>Sell</button>
        </div>
      </div>
    </div>
  )
}
