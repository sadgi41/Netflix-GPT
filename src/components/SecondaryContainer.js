import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movie = useSelector((store) => store.movie);

   if(!movie) return null;

    const secMovie = movie[0];
    console.log(secMovie);

  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-20 '>
      <MovieList title = {"Now Playing"} movie = {movie.nowPlayingMovie} />
       <MovieList title = {"Popular"} movie = {movie.popularMovie} />
        <MovieList title = {"Top Rated"} movie = {movie.topRatedMovie} />
         <MovieList title = {"Upcoming"} movie = {movie.upcomingMovie} />
          <MovieList title = {"Horror"} movie = {movie.nowPlayingMovie} />
    </div>
    </div>
  )
};

export default SecondaryContainer
