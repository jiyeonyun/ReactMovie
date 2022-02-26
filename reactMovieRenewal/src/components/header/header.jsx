import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../header/header.module.css';

const Header = (props) => {
    const genres = ['romance','music','animation','crime','drama'];
    const inputRef = React.createRef();
    const onClick = (event)=>{
        event.preventDefault();
        getSearchedMovies();
    }
    const onKeyPress = (event)=>{
        if(event.key === 'Enter'){
            event.preventDefault();
            getSearchedMovies();
        }
    }
    const getSearchedMovies = () => {
        const input = inputRef.current.value;
        props.movieSearch(input);
        inputRef.current.value = '';
    };

    return(
        <nav className={styles.navbar}>
        <Link to={"/"} >
        <h1 className={styles.logo}>Yun Flix</h1>
        </Link>
        <ul className={styles.navbar_list}>
            {genres.map(genre => (
                <Link to={`/genre/${genre}`}>
                    <li 
                    className={styles.navbar_item}
                    key={genre}
                    >
                    {genre}
                    </li>
                </Link>
            ))}
        </ul>
            <form action="#">
                <input 
                    ref={inputRef} 
                    className={styles.input} 
                    type="search" 
                    placeholder='Search...'
                    onKeyPress={onKeyPress} 
                    />
                <button 
                    className={styles.button} 
                    type='submit'
                    onClick={onClick}
                    >Search</button>
            </form>
    </nav>
    );
};

export default Header;