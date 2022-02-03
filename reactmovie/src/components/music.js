import App from '../App';
import { Link } from 'react-router-dom';
import "../style.css";
import { useState,useEffect } from 'react';
import Movies from '../components/Movies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';


function Music(props){
    const [movies, setMovies] = useState([]);
    const [raiting, setRaiting] =useState('8.8');
    const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=music&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
  };
  console.log(movies);
  useEffect(() => {
    getMovies();
  }, [raiting]);
    const [x2,setX2] = useState(0);
    const clickL = ()=>{
      if(x2>=0){
        return;
      }
      setX2(current=> current + 464);
    }
    const clickR = ()=>{
      if(x2<= -1380){
        return;
      }
      setX2(current => current - 464);
    }
    return(
        <div className='music'>
          <h1 className='mainh1'>Music</h1>
          <div className='slide'>
            <div className='main' style={{transform : `translateX(${x2}px)`}}>
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
          <button className='btnLeft1' onClick={clickL}><FontAwesomeIcon icon={faChevronLeft} className="chevronLeft" size='2x'/></button>
          <button className='btnRight1' onClick={clickR}><FontAwesomeIcon icon={faChevronRight} className="chevronRight" size='2x'/></button>
        </div>
        </div>
    )
}

export default Music;