import { useSelector } from 'react-redux';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie.js';
import useUpcomingMovie from '../hooks/useUpcomingMovie.js';
import GptSearch from './GptSearch.js';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : <>  <MainContainer />
      <SecondaryContainer /></>}
    </div>
  )
}

export default Browse
