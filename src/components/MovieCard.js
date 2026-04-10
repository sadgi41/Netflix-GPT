import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-28 md:w-48'>
      <img alt='Movie Card'
      src={IMG_CDN_URL + posterPath} alt=""/>
    </div>
  )
}

export default MovieCard
