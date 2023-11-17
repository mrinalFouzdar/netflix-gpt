import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'
import MovieList from './MovieList'

const GptMoviesSuggestion = () => {
  const gptData = useSelector((store: RootState) => store.gpt)
  const { moviesName, movieResults } = gptData
  if (!moviesName || !movieResults) return null;
  const movieData: string[] = moviesName
  return (
    <div className='bg-black mt-12 bg-opacity-80 '>
      {
        movieData.map((movieTitle: string, index: number) => <MovieList title={movieTitle} id={movieTitle} key={movieTitle} movies={movieResults[index]} />)
      }
    </div>
  )
}

export default GptMoviesSuggestion
