import { useState,useEffect } from 'react';
import Movies from '../components/Movies';
import HighRaiting from '../components/highRaiting';
import Romance from '../components/romance';
import Animation from '../components/animation';
import Music from '../components/music';
import Header from '../components/header';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <div className='loading'>
          <h1 className='loading_main'>Loading...</h1>
          <img src='https://i.pinimg.com/originals/7e/b2/3b/7eb23b8fa4b6c374504ce2fb9d9c5399.gif'/>
          </div>
      ) : (
        <div>
        <Header />
        <div className='contentsWrap'>
        <HighRaiting movies={movies} />
        <Romance />
        <Music />
        <Animation />
        </div>
        </div>
      )}
    </div>
  );
}

export default Home;