import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import GenreItem from '../../components/genreItem/genreItem';
import Header from '../../components/header/header';
import styles from '../genre/genre.module.css';

function Genre(props){
    const [page,setPage] = useState('1');
    let { genres } = useParams();
    const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [movies, setMovies] = useState([]);
    const onClick= (e)=>{
        setPage(e.target.textContent);
        window.scrollTo(0, 0);
    }
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=year&genre=${genres}&page=${page}`)
        ).json();
        setMovies(json.data.movies);
    };
    useEffect(()=>{
        getMovie();
    },[genres,page]);
    
    return(
    <>
        <Header/>
            <div className={styles.genreWrap}>
                {movies.map(movie => (
                    <GenreItem key={movie.id} movie={movie}/>
                ))}
            </div>
        
            <div className={styles.footer}>
                <ul className={styles.page}>
                    {
                    List_arr.map((lst) => {
                        return (
                        <li 
                            key={lst}
                            className={styles.listarr}
                            onClick={onClick}>
                        {lst}
                        </li>
                        )})
                    }
                </ul>
            </div>
    </>
    );
};

export default Genre;