import { useState,useEffect } from 'react';
import Movies from '../components/Movies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [raiting, setRaiting] =useState('8.8');
    const [x,setX] = useState(0);
    const clickL = ()=>{
      if(x>=0){
        return;
      }
      setX(current=> current + 465);
    }
    const clickR = ()=>{
      if(x<= -1380){
        return;
      }
      setX(current => current - 465);
    }
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
          <h1 className='mainh1'>High Raiting</h1>
          <div className='slide'>
            <div className='main' style={{transform : `translateX(${x}px)`}}>
          {movies.map((movie) =>(
          <Movies 
          key={movie.id}
          id={movie.id}
          CoverImage={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary}
          year={movie.year} 
          genres={movie.genres}/>
          ))}
          </div>
        </div>
        <div className='buttonControl'>
          <button className='btnLeft' onClick={clickL}><FontAwesomeIcon icon={faChevronLeft} className="chevronLeft" size='2x'/></button>
          <button className='btnRight' onClick={clickR}><FontAwesomeIcon icon={faChevronRight} className="chevronRight" size='2x'/></button>
        </div>
        </div>
       
      )}
    </div>
  );
}

export default Home;