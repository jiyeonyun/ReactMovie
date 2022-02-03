import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';


function Genre(){
    const [genre,setGenre] =useState('');
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setGenre(json.data.movies.genre[0])
    setLoading(false);
    console.log(genre);
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
        </div>
      )}
    </div>
  );
}

export default Genre;