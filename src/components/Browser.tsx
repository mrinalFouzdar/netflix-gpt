import { useEffect } from 'react'
import useNowNowPlay from '../hooks/useNowPlay'
import usePopularMovies from '../hooks/usePopularMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContatiner from './SecondaryContatiner'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovie from '../hooks/useUpcomingMovie'

const Browser = () => {

  useNowNowPlay()
  const { getMovieList } = usePopularMovies()
  const { getTopRatedMovieList } = useTopRatedMovies()
  const { getupComingMovieList} = useUpcomingMovie()

  useEffect(() => {
    getMovieList()
    getTopRatedMovieList()
    getupComingMovieList()
  }, [])
  console.log("Browser")
  return (
    <div className='relative' >
      <Header />
      <MainContainer />
      <SecondaryContatiner />
    </div>
  )
}

export default Browser
