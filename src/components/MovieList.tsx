import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
type MovieListType = {
    title: string
    movies: any | null
    id: string
}

const MovieList = ({ title, movies, id }: MovieListType) => {
    // console.log(movies)
    const { handlePageNumber } = usePopularMovies();
    const { handlePageNumberTopRatedMovies } = useTopRatedMovies()
    const { handlePageNumberupComingMovies } = useUpcomingMovie()
    const handleScrool = () => {
        // console.log(window)
        let latestId = document.getElementById(id)
        if (!latestId) {
            return
        }
        if (window.innerWidth + latestId.scrollLeft >= latestId.scrollWidth) {
            // console.log(+(window.innerWidth) + +(latestId.scrollLeft),'total')
            // if (id === 'b') {
            //     handlePageNumber()
            // }
            // console.log(id)

            switch (id) {
                case 'b':
                    handlePageNumber()
                    break;
                case "topRatedMovies":
                    handlePageNumberTopRatedMovies()
                    break;
                case 'upComingMovies':
                    handlePageNumberupComingMovies()
                    break;

                default:
                    // console.log('default');
                    break;
            }
        }
    }
    useEffect(() => {
        let documentId = document.getElementById(id)
        if (!documentId) return;
        documentId.addEventListener("scroll", handleScrool)


        return () => {
            if (!documentId) return
            documentId.removeEventListener('scroll', handleScrool)
        }
    }, [])


    // if (!movies) {
    //     return
    // }


    return (
        <>
            <h1 className='text-2xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll gap-3' id={id}>
                {/* <div className='flex gap-3'> */}

                {
                    movies && movies.map((movie: any) =>
                        <MovieCard key={movie?.id} path={movie?.poster_path} />
                    )
                }

                {/* </div> */}
            </div>
        </>
    )
}

export default MovieList
