
const VideoTitle = ({title,overView}:{title:string,overView:string}) => {
    // console.log(title)
  return (
    <div className='w-screen h-screen pt-36 px-10 text-white absolute bg-gradient-to-r from-black' >
      <h1 className='font-bold text-3xl '>{title}</h1>
      <p className='w-1/4 py-5 text-lg '>{overView}</p>
      <div>
        <button className='py-2 px-10   bg-white text-black  text-lg  rounded-sm hover:bg-opacity-50'>Play</button>
        <button className='py-2 px-7   bg-gray-400  text-lg bg-opacity-30 rounded-sm ml-3'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
