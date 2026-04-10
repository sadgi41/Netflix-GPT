import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch , useSelector } from 'react-redux'
import { addUpcomingMovie } from "../utils/movieSlice"

const useUpcomingMovie = () =>
{
    const dispatch = useDispatch();

    const upcomingMovie = useSelector((store) => store.movie.upcomingMovie)
  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovie(json.results));
  }

  useEffect(() => {
    !upcomingMovie && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovie;
