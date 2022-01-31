import { useState,useEffect } from 'react';
import Movies from '../components/Movies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import Slide from '../components/slide';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [raiting, setRaiting] =useState('8.8');
    const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${raiting}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [raiting]);
  return (
    <div>
      {loading ? (
        <div className='loading'>
          <h1 className='loading_main'>Loading...</h1>
          <img src='https://i.pinimg.com/originals/7e/b2/3b/7eb23b8fa4b6c374504ce2fb9d9c5399.gif'/>
          </div>
      ) : (
        <div>
          <nav className='header'>
            <h1>YunFlix</h1>
            <ul>
              <li>High raiting</li>
              <li>Romance</li>
              <li>Animaition</li>
              <li>Thriler</li>
            </ul>
            <div className='searchBar'>
              <form>
                <input placeholder='Search Movie!'></input>
                <button><FontAwesomeIcon icon={faSearch} className="search"/></button>
              </form>
            </div>
          </nav>
        <Slide movies={movies} />
        </div>
      )}
    </div>
  );
}

export default Home;