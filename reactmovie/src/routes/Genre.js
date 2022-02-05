import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

function Genre(){
  const {group} = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // console.log(`getMovie`)
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    // console.log(movies[0])
  }

  useEffect(() => {
    // console.log(`useEffect`)
    getMovies();
    return ;
  }, [group])

  return (
    <div>
    {loading ? (
      <div className='loading'>
          <h1 className='loading_main'>Loading...</h1>
          <img src='https://i.pinimg.com/originals/7e/b2/3b/7eb23b8fa4b6c374504ce2fb9d9c5399.gif'/>
          </div>
  ) : (
      <div>
        <h1>hi</h1>
      </div>
  )}
  </div>
  )
}

export default Genre;