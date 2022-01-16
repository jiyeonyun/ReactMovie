import Button from './Button';
import styles from './App.module.css';
import { useState,useEffect } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [keyWord,setKeyword] =useState('');
  const onClick = ()=> setCounter((prev)=>prev +1);
  const onChange = (event)=> setKeyword(event.target.value);
  
  useEffect(()=>{console.log('i run only once.');},
  []);
  useEffect(()=>{
    if(keyWord !== "" && keyWord.length>5){
      console.log('search for' , keyWord);
    };
  },[keyWord]);
  useEffect(()=>{
      console.log('i run when counter change');
  },[counter]);
  return (
  <div>
    <input 
    value={keyWord}
    onChange = {onChange} 
    type='text' 
    placeholder='Search here...' />
    <h1 className={styles.title}>{counter}</h1>
    <button onClick={onClick}>click me</button>
  </div>
  );
}

export default App;
