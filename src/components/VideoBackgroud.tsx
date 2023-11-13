import React from 'react'
import {  useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackgroud = ({ movieId }: { movieId: string }) => {
    // console.log(movieId)
    const trailerVideo = useSelector((store: RootState) => store.movies.trailerVideo)
    useMovieTrailer(movieId)
    if (!trailerVideo) {
        return
    }
    const { key } = trailerVideo
   
    return (
        <div className='w-screen'>
            <iframe  className='w-screen aspect-video'src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; 
                web-share" >
                    
            </iframe>
        </div>
    )
}

export default VideoBackgroud
