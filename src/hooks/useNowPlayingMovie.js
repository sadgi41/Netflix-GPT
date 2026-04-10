import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovie } from "../utils/movieSlice"

const useNowPlayingMovie = () =>
{
    const dispatch = useDispatch();

    const nowPlayingMovie = useSelector((store) => store.movie.nowPlayingMovie)

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  }

  useEffect(() => {
    if(!nowPlayingMovie)
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
