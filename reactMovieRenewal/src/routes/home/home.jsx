import React from 'react';
import styles from '../home/home.module.css'
import Movieitem from '../../components/movieItem/movieitem';
const Home = ({movies,page,setPage,search}) => {
    const List_arr = [1, 2, 3];
    const onClick = (e)=>{
        setPage(e.target.textContent);
    }
    return(
    <div>
        {search ?<h1 className={styles.title}>searched Movies... </h1> : <h1 className={styles.title}>🎬 High raiting Movies 🎬</h1> }
        <ul className={styles.movies}>
        {movies.map(movie => (
        <Movieitem key={movie.id} movie={movie}/>
        ))}
        </ul>
        <div className={styles.footer}>
            {
                search? <></> :
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
            }
            </div>
    </div>
    );
};

export default Home;