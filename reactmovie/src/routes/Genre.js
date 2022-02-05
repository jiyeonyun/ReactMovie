import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Gmovies from '../components/Gmovies';
import Header from '../components/header';
import "../style.css";
import "../detail.css";

function Genre(){
  const {group,page} = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getMovies = async () => {
    // console.log(`getMovie`)
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  console.log(movies)

  useEffect(() => {
    // console.log(`useEffect`)
    getMovies();
    return ;
  }, [group,page])

  return (
    <div>
    {loading ? (
      <div className='loading'>
          <h1 className='loading_main'>Loading...</h1>
          <img src='https://i.pinimg.com/originals/7e/b2/3b/7eb23b8fa4b6c374504ce2fb9d9c5399.gif'/>
          </div>
  ) : (
      <div>
            <Header />
          <div className='genreWrap'>
            {movies.map((movie) =>(
          <Gmovies 
          key={movie.id}
          id={movie.id}
          CoverImage={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary}
          year={movie.year} 
          genres={movie.genres}
          rating={movie.rating}
          runtime={movie.runtime}/>
          ))}
          </div>
          <div className='footer'>
            <div className='list'>
              {
                List_arr.map((lst) => {
                  return (
                    <Link
                      key={lst}
                      to={`/page/${group}/${lst}`}
                    >
                      {lst}</Link>
                  )
                })
              }
            </div>
          </div>
      </div>
      
  )}
  </div>
  )
}

export default Genre;