import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch , useSelector } from 'react-redux'
import { addTopRatedMovie } from "../utils/movieSlice"

const useTopRatedMovie = () =>
{
    const dispatch = useDispatch();

    const topRatedMovie = useSelector((store) => store.movie.topRatedMovie)

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovie(json.results));
  }

  useEffect(() => {
    !topRatedMovie && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovie;