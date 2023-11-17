import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
      <div className='fixed w-full h-screen -z-10 object-cover'>
        <img src={BG_URL} alt="logo" className='h-screen w-full' />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  )
}

export default GptSearchPage
