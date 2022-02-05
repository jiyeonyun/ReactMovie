import App from '../App';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "../style.css";

function Gmovies({CoverImage,title,summary,genres,id,year,rating,runtime}){
    return (
          <div className='g_movie'>
                <Link to={`/movie/${id}`}><img src={CoverImage} alt ={title} className='img_main'/></Link>
                <div className='g_desc'>
                <h2 className='g_title_main'>{title}</h2>
                <h4>Year : {year}</h4>
                <h4>Rating : {rating} / 10</h4>
                <h4>Runtime : {runtime} min</h4>
                <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
                </div>
              </div>
    );
}

export default Gmovies;