import React from 'react'
import useTrailer from '../hooks/useTrailer'
import { useSelector } from 'react-redux';
import Loader from './Loader';
import { Get_Youtube_Video_URL1, Get_Youtube_Video_URL2 } from '../utils/constants';


const VideoBackground = ({movieId,backgroundImage}) => {
    useTrailer(movieId);
    const trailer=useSelector((store)=>store.movies?.trailer);
    
  return (
    <>
    {trailer ? (<div className='w-full -z-10 pt-20 md:pt-0'>

    <iframe src={Get_Youtube_Video_URL1+trailer?.key+Get_Youtube_Video_URL2+"&controls=0"} 
      title="YouTube video player" 
      frameBorder="0" 
      className='w-full aspect-video'></iframe>
    </div>):(
      <Loader/>
    )}
    </>
  )
}

export default VideoBackground
