import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../style.css";
import { Link } from 'react-router-dom';

function Header(props){
    return(
        <nav className='header'>
          <Link to={`/movie`}>
            <h1>YunFlix</h1>
            </Link>
            <ul>
              <li>High raiting</li>
              <li>Romance</li>
              <li>Animaition</li>
              <li>Music</li>
            </ul>
            <div className='searchBar'>
              <form>
                <input placeholder='Search Movie!'></input>
                <button><FontAwesomeIcon icon={faSearch} className="search"/></button>
              </form>
            </div>
          </nav>
    )
}

export default Header;