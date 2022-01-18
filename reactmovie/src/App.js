import { useState,useEffect } from 'react';

function App() {
  const[loading,setLoading] = useState(true);
  const[onof,setOnof] = useState(false);
  const [coins,setCoins] =useState([]);
  const [selectOp,setSelectOp] = useState('');
  const [money,setMoney] = useState('');
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json)
      setLoading(false);
    });
  },[]);
  const onchange = (event)=>{
    setSelectOp(event.target.value);
  };
  const onSubmit = (event)=>{
      event.preventDefault();
  }
  const onMoney = (event)=>{
    setMoney(event.target.value);
  }
  const onofChange = ()=>{
    setOnof(true);
    }
  return (
  <div>
  <h1>The Coins!({coins.length})</h1>
  {loading ? <strong>Loading...</strong> 
  :<div>
    <form onSubmit={onSubmit}>
    <input
    onChange={onMoney}
    type='number'
    />
    <span>USD</span>
    </form>
    <select onChange={onchange}>
    <option>Select coin</option>
  {coins.map((coin)=><option value={[coin.quotes.USD.price]}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price}USD</option>)}
  </select>
  <button onClick={onofChange}>calculate</button>
  {onof ? <h2>you can buy {Math.floor(money /selectOp)} coins</h2> : null}
  </div>
  }
  </div>
  );
}

export default App;
