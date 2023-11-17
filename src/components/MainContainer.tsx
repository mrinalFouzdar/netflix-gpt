import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'
import VideoTitle from './VideoTitle'
import VideoBackgroud from './VideoBackgroud'

const MainContainer = () => {

    const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies)

    if (!movies) return
    const mainvMovie = movies[0]

    // console.log(mainvMovie)
    const {original_title,overview,id} = mainvMovie
    return (
        <div className='relative pt-[30%] md:pt-0 bg-black'>
            <VideoTitle title={original_title} overView={overview}/>
            <VideoBackgroud movieId={id}/>
        </div>
    )
}

export default MainContainer
