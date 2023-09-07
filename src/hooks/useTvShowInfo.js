import { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const useTvShowInfo = (showId) => {

    const [tvShow,setTvShow]=useState();
    const [casts,setCasts]=useState();

    const getCasts=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/tv/"+showId+"/credits?language=en-US",API_OPTIONS)
        const json=await data.json();
        setCasts(json.cast);
    }
  
  const getTvShowDetails=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/tv/"+showId+"?language=en-US",API_OPTIONS);
    const json=await data.json();
    setTvShow(json);

  }
  
  useEffect(()=>{
    getTvShowDetails();
    getCasts();
  },[])

  return {
    tvShow:tvShow,
    casts:casts
  }
}

export default useTvShowInfo
