
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
 const {movieNames , movieResults} = useSelector((store) => store.gpt);
 if(!movieNames) return null;
  return (
    <div className='bg-black opacity-85 text-white m-4'>
      <div>
        {movieNames.map((movieNames , index) => (
          <MovieList key = {movieNames} title = {movieNames} movie = {movieResults[index]} />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion
