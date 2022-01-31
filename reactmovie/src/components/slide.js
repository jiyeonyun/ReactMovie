import App from '../App';
import { Link } from 'react-router-dom';
import "../style.css";
import { useState,useEffect } from 'react';
import Movies from '../components/Movies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';


function Slide(props){
    const [x,setX] = useState(0);
    const clickL = ()=>{
      if(x>=0){
        return;
      }
      setX(current=> current + 464);
    }
    const clickR = ()=>{
      if(x<= -1380){
        return;
      }
      setX(current => current - 464);
    }
    return(
        <div>
          <h1 className='mainh1'>High Raiting</h1>
          <div className='slide'>
            <div className='main' style={{transform : `translateX(${x}px)`}}>
          {props.movies.map((movie) =>(
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
    )
}

export default Slide;