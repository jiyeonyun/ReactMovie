import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/home/home';
import Detail from './routes/detail/detail';
import Genre from './routes/genre/genre';
import Header from './components/header/header';
import Search from './routes/search/search';

function App() {
  const[movies, setMovies] = useState([]);
  const[page ,setPage] =useState(0);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
      };
  const movieSearch = async (input) => {
        const json = await (
                await fetch(`https://yts.mx/api/v2/list_movies.json?query_term="${input}"&sort_by=year`)  
            ).json();
            setMovies(json.data.movies);
        }
        useEffect(()=>{
            getMovies()
            window.scrollTo(0, 0);
        },[page])
return (
  <Router basename={process.env.PUBLIC_URL}>
    <Header movieSearch={movieSearch}/>
    <Switch>
      <Route exact path="/">
        <Home movies={movies} page={page} setPage={setPage} />
      </Route>
      <Route path='/movie/:id'>
        <Detail />
      </Route>
      <Route path='/genre/:genres'>
        <Genre />
      </Route>
      <Route path='/search'>
        <Search movies={movies} page={page} setPage={setPage}/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
