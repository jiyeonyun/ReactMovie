import App from '../App';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "../style.css";

function Movies({CoverImage,title,summary,genres,id}){
    return (
        <div>
          <div className='movie'>
              <Link to={`/movie/${id}`}><img src={CoverImage} alt ={title} className='img_main'/></Link>
              <h2 className='title_main'>
                <Link to={`/movie/${id}`}>{title}</Link></h2>
              </div>
            </div>
    );
}

Movies.propTypes ={
    id:propTypes.number.isRequired,
    CoverImage :propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movies;