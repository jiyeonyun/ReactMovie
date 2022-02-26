import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
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
        <div className={styles.detail} style={{backgroundImage: `url(${movies.background_image})`, backgroundRepeat : 'no-repeat',backgroundSize:'cover'}}>
            <div className={styles.wrap}>
                <div className={styles.card}>
                        <img src={movies.large_cover_image}></img>
                    <div className={styles.descCard}>
                        <h1 className={styles.title}>{movies.title_long}</h1>
                        <h3 className={styles.des}>{movies.year}</h3>
                        <h3 className={styles.des}>⭐️ {movies.rating === 0 ? 'we don`t have rating' : `${movies.rating} / 10`}</h3>
                        <h4 className={styles.des}>⏰ {movies.runtime === 0 ? 'we don`t have runtime' :`${movies.runtime} minitues` } </h4>
                        <p className={styles.des}>{movies.description_full ? movies.description_full : "we don`t have description"}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        )};
export default Detail;