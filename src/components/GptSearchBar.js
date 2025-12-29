import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
      <form className='flex gap-6 justify-center items-center pt-36'>
        <input className='rounded-lg bg-black opacity-90 text-white placeholder-slate-400 text-center w-1/3 h-14' type='text' placeholder='What would you like to watch today?' />
        <button className='rounded-lg bg-red-500 text-lg text-white w-24 h-12'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
