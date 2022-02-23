import React from 'react';
import styles from '../home/home.module.css'
import Movieitem from '../movieItem/movieitem';
const Home = ({movies}) => {
    return(
    <div>
        <h1 className={styles.title}>🎬 High raiting Movies 🎬</h1>
        <ul className={styles.movies}>
        {movies.map(movie => (
        <Movieitem key={movie.id} movie={movie}/>
        ))}
        </ul>
    </div>
    );
};

export default Home;