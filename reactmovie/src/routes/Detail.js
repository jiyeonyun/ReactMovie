import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import "../style.css";

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
    useEffect(()=>{
        getMovie();
    },[]);
    console.log(movies)
    return(
        <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
            <img src={movies.large_cover_image}></img>
            <h1>{movies.title_long}</h1>
            <h2>{movies.year}</h2>
            <h3>{movies.rating}</h3>
            <p>{movies.runtime} minitues</p>
            <ul>
                {movies.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            <p>{movies.description_full}</p>

            </div>
        )}
      </div>
    )
   
}
export default Detail;