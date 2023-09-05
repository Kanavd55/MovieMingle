import { API_OPTIONS, nowPlayingMovies, topRated } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";    
import { useEffect } from "react";
    
const useTopRated=()=>{

    const dispatch=useDispatch();

    const getTopRated=async ()=>{
        const data=await fetch(topRated,API_OPTIONS);
        const json=await data.json();
        dispatch(addTopRated(json.results));
    }
    
    useEffect(()=>{
        getTopRated();
    },[])

}

export default useTopRated;