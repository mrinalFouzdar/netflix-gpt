import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'

const SecondaryContatiner = () => {
  const  movies= useSelector((store:RootState)=> store.movies)


  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-60 z-30 relative mx-6'>

      <MovieList title="Now Play Movie" movies ={movies.nowPlayingMovies} id='a' key={'a'}/>
      <MovieList title="Popular Movie" movies ={movies.popularMovies} id='b' key={'b'}/>
      <MovieList title="Top Ratd Movies" movies ={movies.topRatedMovies} id='topRatedMovies' key={'topRatedMovies'}/>
      <MovieList title="Upcoming Movies" movies ={movies.upcomingMovies} id='upComingMovies' key={'upComingMovies'}/>
      </div>
    </div>
  )
}

export default SecondaryContatiner
