import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../header/header.module.css';

const Header = () => {
    const genres = ['romance','music','animation','crime','drama'];
    
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
                <form className={styles.form}>
                <input 
                    className={styles.input} 
                    type="search" 
                    placeholder='Search...' 
                    />
                <button className={styles.button} type='submit'>Search</button>
                </form>
    </nav>
    );
};

export default Header;