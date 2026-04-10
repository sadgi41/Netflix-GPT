
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movie = useSelector((store) => store.movie?.nowPlayingMovie);

    if(!movie) return null;

    const mainMovie = movie[0];
    // console.log(mainMovie);

    const {original_title , overview , id} = mainMovie;
  return (
    <div className='bg-black'>
    <div className='pt-32'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
    </div>
  )
}

export default MainContainer
