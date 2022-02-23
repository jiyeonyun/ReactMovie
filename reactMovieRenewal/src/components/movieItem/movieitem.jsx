import React from 'react';
import styles from '../movieItem/movieitem.module.css'
const Movieitem = (props) => (
            <li className={styles.container}>
                <div className={styles.item_front}>
                    <img src={props.movie.medium_cover_image} alt="" />
                </div>

                <div className={styles.item_back} style={{backgroundImage:`url(${props.movie.background_image})`}}>
                    <h3 className={styles.title}>{props.movie.title}</h3>
                    <span className={styles.info}>⭐️ {props.movie.rating}/10</span>
                    <span className={styles.info}>⏰ {props.movie.runtime}Min</span>
                    <span className={styles.info}>🖤 {props.movie.year}</span>
                    <ul className={styles.genres}>
                    {props.movie.genres.map((g) => (
                        <li className={styles.genre} key={g}>#{g}</li>
                    ))}
                    </ul>
                </div>
            </li>
    );

export default Movieitem;