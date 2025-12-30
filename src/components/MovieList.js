import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movie}) => {
    // console.log(movie);
  return (
    <div>
        <h1 className='p-6 text-white text-3xl'>{title}</h1>
      <div className='flex px-4 overflow-x-scroll hide-scrollbar '>
        <div className='flex gap-3 '>
            {movie?.map((movie) => (
             <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
