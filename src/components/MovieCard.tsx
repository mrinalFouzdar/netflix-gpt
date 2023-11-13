import React, { useEffect } from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({path}:{path:any}) => {
  const handleScrool =()=>{
    console.log(document.documentElement.scrollLeft )
}
// useEffect(()=>{
//     window.addEventListener("scroll",handleScrool)
//     console.log('object')


//     return ()=>{
//         window.removeEventListener('scroll',handleScrool)
//     }
// },[])
  return (
    <div>

    <div className='w-44 '>
      <img src={IMG_CDN_URL+path} alt="Movie" />
    </div>
    </div>
  )
}

export default MovieCard
