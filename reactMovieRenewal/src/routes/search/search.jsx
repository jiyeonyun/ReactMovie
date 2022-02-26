import React from 'react';
import styles from '../home/home.module.css'
import Movieitem from '../../components/movieItem/movieitem';
const Search = ({movies,page,setPage}) => {
    const List_arr = [1, 2, 3, 4, 5, 6];
    const onClick = (e)=>{
        setPage(e.target.textContent);
    }
    return(
    <div>
        <h1 className={styles.title}>Search info....</h1>
        <ul className={styles.movies}>
        {movies.map(movie => (
        <Movieitem key={movie.id} movie={movie}/>
        ))}
        </ul>
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
    </div>
    );
};

export default Search;