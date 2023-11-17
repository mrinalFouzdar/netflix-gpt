
const VideoTitle = ({title,overView}:{title:string,overView:string}) => {
    // console.log(title)
  return (
    <div className='w-screen h-screen pt-20 md:pt-36 px-10 text-white absolute bg-gradient-to-r from-black' >
      <h1 className='font-bold md:text-3xl '>{title}</h1>
      <p className='hidden sm:block md:w-1/4 py-5 md:text-lg '>{overView}</p>
      <div className="ml-0 md:ml-10">
        <button className='py-2 px-10  bg-white text-black  text-lg  rounded-sm hover:bg-opacity-50'>Play</button>
        <button className='py-2 px-7 bg-gray-400  text-lg bg-opacity-30 rounded-sm ml-3'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
