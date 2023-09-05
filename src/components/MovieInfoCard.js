import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS, IMG_CDN} from "../utils/constants";

const MovieInfoCard = () => {

    const {movieId}=useParams();
    const [movieInfo,setMovieInfo]=useState(null)

    const getMovieInfo=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US",API_OPTIONS);
        const json=await data.json();
        console.log(json);
        setMovieInfo(json)
    }
    
    useEffect(()=>{
        getMovieInfo();
    },[]);


  return (<div className='h-screen bg-black'>
    {movieInfo && (
    <div className='left-52 absolute my-[7%] p-8 rounded-lg bg-gray-900 w-8/12 flex '>
      <div className='w-1/2 p-4'>
        <img className="rounded-lg w-3/4" src={IMG_CDN+movieInfo.poster_path} alt='movie-poster'/>
      </div>
      <div className='w-1/2 p-2 text-white'>
        <p className='text-3xl my-10 font-bold'>{movieInfo.original_title}</p>
        <p className='text-lg my-4'>Overview:-{movieInfo.overview}</p>
        <p className='my-4'>Released on :-{movieInfo.release_date}</p>
      </div>
    </div>)}</div>
  )
}

export default MovieInfoCard
