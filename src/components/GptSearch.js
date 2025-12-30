import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BGIMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <img className='fixed -z-10' src = {BGIMAGE} />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
