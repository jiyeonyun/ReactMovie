import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import "../style.css";
import "../detail.css";
import Header from '../components/header';

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovies(json.data.movie);
            setLoading(false);
    };
    console.log(movies);
    useEffect(()=>{
        getMovie();
    },[]);
    console.log(movies)
    return(
        <div>
        {loading ? (
            <div className='loading'>
                <h1 className='loading_main'>Loading...</h1>
                <img src='https://i.pinimg.com/originals/7e/b2/3b/7eb23b8fa4b6c374504ce2fb9d9c5399.gif'/>
                </div>
        ) : (
            <div className='detail' style={{backgroundImage: `url(${movies.background_image})`, backgroundRepeat : 'no-repeat',backgroundSize:'cover'}}>
              <Header/>
              <div className='wrap'>
              <div className='card'>
              <img src={movies.large_cover_image}></img>
              <div className='descCard'>
                <h1>{movies.title_long}</h1>
                <h2>{movies.year}</h2>
                <h3>⭐️ {movies.rating}</h3>
                <h4>⏰ {movies.runtime} minitues</h4>
                <ul>
                    {movies.genres.map((g) => (
                      <li key={g}>#{g}</li>
                    ))}
                  </ul>
                <p>{movies.description_full}</p>
              </div>
              </div>
              </div>
            </div>
        )}
      </div>
    )
   
}
export default Detail;