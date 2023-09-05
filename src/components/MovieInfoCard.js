import React from 'react'
import { IMG_CDN} from "../utils/constants";

const MovieInfoCard = ({movieInfo}) => {


  return (<div className='h-screen bg-black'>
    {movieInfo && (
    <div className='left-52 absolute my-[7%] p-8 rounded-lg bg-gray-900 w-8/12 flex '>
      <div className='w-1/2 p-4'>
        <img className="rounded-lg w-3/4" src={IMG_CDN+movieInfo.poster_path} alt='movie-poster'/>
      </div>
      <div className='w-1/2 p-2 text-white'>
        <p className='text-3xl my-10 font-bold'>{movieInfo.original_title}</p>
        <p className='text-lg my-4 break-words'>Overview:-{movieInfo.overview.split(" ",60).join(" ")}...</p>
        <p className='my-4'>Released on :-{movieInfo.release_date}</p>
      </div>
    </div>)}</div>
  )
}

export default MovieInfoCard;
