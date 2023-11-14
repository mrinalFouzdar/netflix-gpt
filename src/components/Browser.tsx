import { useEffect } from 'react'
import useNowNowPlay from '../hooks/useNowPlay'
import usePopularMovies from '../hooks/usePopularMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContatiner from './SecondaryContatiner'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'

const Browser = () => {


  useNowNowPlay()
  const { getMovieList } = usePopularMovies()
  const { getTopRatedMovieList } = useTopRatedMovies()
  const { getupComingMovieList } = useUpcomingMovie()
  const showGptSearch = useSelector((store: RootState) => store.gpt.showGptSearch)
  // console.log(showGptSearch)

  useEffect(() => {
    getMovieList()
    getTopRatedMovieList()
    getupComingMovieList()
  }, [])

  return (
    <div className='relative' >
      <Header />
      {
        showGptSearch ? <GptSearchPage /> : <>
          <MainContainer />
          <SecondaryContatiner />
        </>
      }


    </div>
  )
}

export default Browser
