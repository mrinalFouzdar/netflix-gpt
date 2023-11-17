import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'
import lang from '../utils/languageConstant'
import openai from '../utils/openApi'
import { API_CONSTANT } from '../utils/constants'
import { addGptMoviesResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const langKey = useSelector((store: RootState) => store.config.lan)
    const dispatch = useDispatch()
    const inputTextRef = useRef<HTMLInputElement>(null)
    if (!langKey) {
        return
    }

    // TMDB MOVIE SEARCH
    const searchMovieTmdb = async (movie: string) => {
        try {
            let data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_CONSTANT)
            let json = await data.json()
            return json.results;
        } catch (error) {
            console.log(error)
        }
    }

    // GPT SEARCH 
    const handleGptSearch = async () => {
        // console.log(inputTextRef.current)
        if (inputTextRef.current) {
            console.log(inputTextRef.current.value)
        } else {
            return
        }
        const query = `Act as a movie recomendation system and suggest movie for the query ${inputTextRef.current.value} . Only give me name of 5 movies , comma seperated like the example result given ahead. Example Result: Pathan ,  Sholay, Don , Koi mill gaya, 3 Idiots`
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });

        console.log(gptResult.choices)

        if (!gptResult.choices) {
            console.log('error-from-gptApi');
        }

        //   STRING TO ARRAY BASE ON -->,
        const gptMovies = gptResult.choices?.[0].message.content?.split(', ')
        console.log(gptMovies)

        const promiseArray = gptMovies?.map((movie) => searchMovieTmdb(movie));
        if (!promiseArray) {
            return
        }
        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults)
        dispatch(addGptMoviesResult({ moviesName: gptMovies, movieResults: tmdbResults }))
    }

    return (
        <div className='pt-[50%] md:pt-[10%] flex justify-center '>
            <form className='w-5/6 md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={inputTextRef} placeholder={lang[langKey]?.gptSearchPlaceHolder} className='p-3 m-2 col-span-8 md:p-4 md:m-4 md:col-span-10' />
                <button className=' col-span-4 md:col-span-2 px-2 md:px-4 py-1 md:py-2 text-white bg-red-500 rounded-lg text-lg md:text-2xl font-bold' onClick={handleGptSearch}>{lang[langKey]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
