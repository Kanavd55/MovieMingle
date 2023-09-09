import { useEffect, useState } from 'react'
import { API_OPTIONS, Get_Person_Info_Url1, Get_Person_Info_Url2, Get_Person_Movies_Url } from '../utils/constants'

const usePersonInfo = (personId) => {
    const [personInfo,setPersonInfo]=useState(null);
    const [personMovies,setPersonMovies]=useState(null);

    const getPersonInfo=async ()=>{
        const data=await fetch(Get_Person_Info_Url1+personId+Get_Person_Info_Url2,API_OPTIONS);
        const json=await data.json();
        setPersonInfo(json);
    }

    const getPersonMovies=async ()=>{
        const data=await fetch(Get_Person_Info_Url1+personId+Get_Person_Movies_Url,API_OPTIONS);
        const json=await data.json();
        const filter = await json?.cast?.filter((movie) => {
            return movie.poster_path !== null;
          });
        setPersonMovies(filter);
    }
    useEffect(()=>{
        getPersonInfo();
        getPersonMovies();
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[]);

    return {
        personInfo:personInfo,
        personMovies:personMovies
    }

}

export default usePersonInfo
