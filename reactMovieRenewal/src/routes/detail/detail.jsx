import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Header from '../../components/header/header';
import styles from '../detail/detail.module.css'
function Detail(){
    const {id} = useParams();
    const [movies, setMovies] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
        console.log(json); 
    };
    
    useEffect(()=>{
        getMovie();
    },[]);
    return(
        <>
        <Header/>
        <div className={styles.detail} style={{backgroundImage: `url(${movies.background_image})`, backgroundRepeat : 'no-repeat',backgroundSize:'cover'}}>
            <div className={styles.wrap}>
                <div className={styles.card}>
                        <img src={movies.large_cover_image}></img>
                    <div className={styles.descCard}>
                        <h1>{movies.title_long}</h1>
                        <h2>{movies.year}</h2>
                        <h3>⭐️ {movies.rating === 0 ? 'we don`t have rating' : movies.rating}</h3>
                        <h4>⏰ {movies.runtime === 0 ? 'we don`t have runtime' :`${movies.runtime} minitues` } </h4>
                        <p>{movies.description_full ? movies.description_full : "we don`t have description"}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        )};
export default Detail;