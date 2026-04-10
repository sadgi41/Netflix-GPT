import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BGIMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <img className='fixed h-screen object-cover -z-10 md:h-auto' src = {BGIMAGE} alt="" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
