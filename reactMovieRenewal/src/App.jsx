import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/header';

function App() {
  const[movies, setMovies] = useState([]);
  const genre = ['romance','music','animation','crime','drama'];
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
}
console.log(movies)
useEffect(()=>{
  getMovies()
},[])
return (
  <div>
  <Header genre={genre}/>
  </div>
  );
}

export default App;
