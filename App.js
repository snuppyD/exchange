import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ChangeСurrency } from './components/Buttons'
import { Depths } from './components/Depths'
import { Forms } from './components/Form'
import { Calculate } from './components/Calculation'

function App() {
  const [counter, setCounter] = useState(0)
  const [dataMarket, setDataMarket] = useState('BTCUSDT')
  const [aplication, setAplication] = useState([])
  const [data, setData] = useState([
    { name: 'Binance', depths: { asks: [], bids: [] } },
    { name: 'Kuna', depths: { asks: [], bids: [] } },
  ])
  useEffect(() => {
    setInterval(() => setCounter(prev => prev + 1), 2000)
  }, [])
  useEffect(() => {
    getResponseKuna(dataMarket)
    getResponseBinance(dataMarket)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])
  useEffect(() => {
    if (data[1].depths.bids.length && data[0].depths.asks.length) {
      CalcBinanceToKuna()
    }
    if (data[0].depths.bids.length && data[1].depths.asks.length) {
      CalcKunaToBinance()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  const getResponseBinance = async dataMarket => {
    const url = 'https://api.binance.com/api/v3/depth?symbol=' + dataMarket + '&limit=10'
    const responce = await axios.get(url)
    setData(prev => {
      const arr = prev.map(item => {
        if (item.name === 'Binance') {
          return { name: 'Binance', depths: { asks: responce.data.asks, bids: responce.data.bids } }
        } else {
          return item
        }
      })
      return arr
    })
  }

  const getResponseKuna = async () => {
    const url = 'https://api.kuna.io/v3/book/' + dataMarket.toLocaleLowerCase()
    const responce = await axios.get(url)

    setData(prev => {
      const arr = prev.map(item => {
        const ask = responce.data.filter(elem => elem[1] < 0)
        ask.splice(10)
        const bid = responce.data.filter(elem => elem[1] > 0)
        bid.splice(10)
        if (item.name === 'Kuna') {
          return {
            name: 'Kuna',
            depths: { asks: ask, bids: bid },
          }
        } else {
          return item
        }
      })
      return arr
    })
  }
  function CalcBinanceToKuna() {
    const result = (
      ((data[1].depths.bids[0][0] - data[0].depths.asks[data[0].depths.asks.length - 1][0]) * 100) /
      data[0].depths.asks[data[0].depths.asks.length - 1][0]
    ).toFixed(3)
    setAplication([result])
  }
  function CalcKunaToBinance() {
    const result2 = (
      ((data[0].depths.bids[0][0] - data[1].depths.asks[data[1].depths.asks.length - 1][0]) * 100) /
      data[1].depths.asks[data[1].depths.asks.length - 1][0]
    ).toFixed(5)
    setAplication(prev => [...prev, result2])
  }

  return (
    <div className="App">
      <ChangeСurrency setDataMarket={setDataMarket} />
      <div className="content">
        {data.map(item => (
          <Depths info={item} />
        ))}
      </div>
      <div>
        <Calculate aplication={aplication} />
      </div>
      <div className="forma">
        <Forms data={data[0]} />
      </div>
    </div>
  )
}

export default App
