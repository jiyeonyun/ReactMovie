import { useState,useEffect } from 'react';
import Movies from '../components/Movies';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [raiting, setRaiting] =useState('8.8');
    const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${raiting}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [raiting]);
  return (
    <div>
      {loading ? (
        <div className='loading'>
          <h1 className='loading_main'>Loading...</h1>
          <img src='https://i.pinimg.com/originals/7e/b2/3b/7eb23b8fa4b6c374504ce2fb9d9c5399.gif'/>
          </div>
      ) : (
        <div>
          <h1 className='h1_main'>🍿Movie recommend(rating 8.8⬆️)🎬</h1>
          <div className='btns_main'>
            <p className='p_main'>change raiting!</p>
            <button onClick={()=>{
              setRaiting('8.5')
              setLoading(true)}}>8.5</button>
            <button onClick={()=>{
              setRaiting('8.0')
              setLoading(true)}}>8.0</button>
            <button onClick={()=>{
              setRaiting('7.5')
              setLoading(true)}}>7.5</button>
            <button onClick={()=>{
              setRaiting('7.0')
              setLoading(true)}}>7.0</button>
            <button onClick={()=>{
              setRaiting('8.8')
              setLoading(true)}}>reset</button>
          </div>
          <div className='main'>
          {movies.map((movie) =>(
          <Movies 
          key={movie.id}
          id={movie.id}
          CoverImage={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}/>
          ))}
        </div>
        </div>
       
      )}
    </div>
  );
}

export default Home;