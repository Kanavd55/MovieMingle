import React from 'react'
import useTrailer from '../hooks/useTrailer'
import { useSelector } from 'react-redux';


const VideoBackground = ({movieId,backgroundImage}) => {
    useTrailer(movieId);
    const trailer=useSelector((store)=>store.movies?.trailer);
    
  return (
    <>
    {trailer && (<div className='w-full -z-10'>

    <iframe src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&controls=0&modestbranding=1"} 
      title="YouTube video player" 
      frameBorder="0" 
      className='w-full aspect-video'></iframe>
    </div>)}
    </>
  )
}

export default VideoBackground
