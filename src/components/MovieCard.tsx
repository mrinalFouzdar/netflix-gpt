import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({path}:{path:any}) => {

  return (
    <div>

    <div className='w-44 '>
      <img src={IMG_CDN_URL+path} alt="Movie" />
    </div>
    </div>
  )
}

export default MovieCard
