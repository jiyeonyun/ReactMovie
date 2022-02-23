import React, { useRef } from 'react';
import styles from '../header/header.module.css';
const Header = ({genre}) => {
    

    return(
        <nav className={styles.navbar}>
        <h1 className={styles.logo}>Yun Flix</h1>
        <ul className={styles.navbar_list}>
            {genre.map(genre => (
                <li className={styles.navbar_item}>{genre}</li>
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