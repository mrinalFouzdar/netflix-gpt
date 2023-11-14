import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'
import lang from '../utils/languageConstant'

const GptSearchBar = () => {
    const langKey = useSelector((store: RootState) => store.config.lan)
    if (!langKey) {
        return
    }


    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
                <input type="text" placeholder={lang[langKey]?.gptSearchPlaceHolder} className='p-4 m-4 col-span-9' />
                <button className=' col-span-3 px-4 py-2 text-white bg-red-500 rounded-lg text-2xl font-bold'>{lang[langKey]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
