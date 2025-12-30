import React, { useRef } from 'react'
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const searchMovieTmdb = async(movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)

    const json = await data.json();
    return json.results;
  }

const handleGptSearchClick = async() => {
console.log(searchText.current.value);

const gptResults = await openai.responses.create({
  model: 'gpt-4o',
  instructions: 'Act as a movie recommendation system and recommend 5 movies according to the search text. The movies name should be comma separated.',
  input: searchText.current.value,
});

console.log(gptResults.output_text);

const gptMovies = gptResults.output_text.split(",");

const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

const tmdbResults = await Promise.all(promiseArray);

console.log(tmdbResults);

dispatch(addGptMovieResult({movieNames: gptMovies , movieResults: tmdbResults}));

}

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className='flex gap-6 justify-center items-center pt-36'>
        <input ref={searchText} className='rounded-lg bg-black opacity-90 text-white placeholder-slate-400 text-center w-1/3 h-14' type='text' placeholder='What would you like to watch today?' />
        <button onClick={handleGptSearchClick} className='rounded-lg bg-red-500 text-lg text-white w-24 h-12'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
