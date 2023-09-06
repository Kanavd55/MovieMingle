import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const usePersonInfo = (personId) => {
    const [personInfo,setPersonInfo]=useState(null);
    const [personMovies,setPersonMovies]=useState(null);

    const getPersonInfo=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/person/"+personId+"?language=en-US",API_OPTIONS);
        const json=await data.json();
        setPersonInfo(json);
    }

    const getPersonMovies=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/person/"+personId+"/movie_credits?language=en-US",API_OPTIONS);
        const json=await data.json();
        const filter = await json.cast.filter((movie) => {
            return movie.poster_path !== null;
          });
        setPersonMovies(filter);
    }
    useEffect(()=>{
        getPersonInfo();
        getPersonMovies();
    },[]);

    return {
        personInfo:personInfo,
        personMovies:personMovies
    }

}

export default usePersonInfo
