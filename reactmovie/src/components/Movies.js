import App from '../App';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movies({CoverImage,title,summary,genres,id}){
    return (
        <div>
              <Link to={`/movie/${id}`}><img src={CoverImage} alt ={title}/></Link>
              <h2>
                <Link to={`/movie/${id}`}>{title}</Link></h2>
              <p>{summary}</p>
              <ul>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
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