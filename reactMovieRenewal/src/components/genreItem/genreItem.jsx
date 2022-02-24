import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../genreItem/genreItem.module.css'
const GenreItem = (props) => {
    return(
        <div className={styles.itemCard}>
            <img className={styles.img} src={props.movie.medium_cover_image} alt="" />
            <div className={styles.desc}>
                <h2 className={styles.title}>{props.movie.title}</h2>
                <h4 className={styles.year}>{props.movie.year}</h4>
                <p className={styles.p}>{`${props.movie.rating} / 10`}</p>
                <p className={styles.p}>{`${props.movie.runtime} min`}</p>
                <p className={styles.p}>{`${props.movie.description_full.slice(0,200)}...`}</p>
                <Link to={`/movie/${props.movie.id}`}>
                <span className={styles.span}>Go to Detail 📝</span>
                </Link>
            </div>
        </div>
    );
    
};

export default GenreItem;