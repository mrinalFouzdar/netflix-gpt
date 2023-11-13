import React, { useEffect, useState } from 'react'

const useInfiniteScroll = () => {

    const [IsFetching,setIsFetching] = useState(false);
    
    // Scroll function
    const handleScroll=()=>{
        if(window.innerWidth + document.documentElement.scrollLeft >= document.documentElement.scrollWidth){
            setIsFetching(true);

        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)

        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    useEffect(()=>{

    },[IsFetching])
}

export default useInfiniteScroll
