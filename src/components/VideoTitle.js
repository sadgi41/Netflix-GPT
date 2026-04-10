

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-20 md:pt-48 px-12 absolute w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-lg md:text-3xl font-bold my-4 text-white'>{title}</h1>
      <p className='w-1/2 my-6 hidden md:inline-block text-white'>{overview}</p>
      <div className='flex gap-3'>
        <button className='bg-white w-14 md:w-24 text-black font-medium rounded-lg h-8 md:h-10 '>Play</button>
        <button className='bg-slate-600 w-24 text-white rounded-lg hidden md:inline-block h-10 bg-opacity-20'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
