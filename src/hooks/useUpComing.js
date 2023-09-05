import { API_OPTIONS, nowPlayingMovies, upComing } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComing } from "../utils/moviesSlice";    
import { useEffect } from "react";
    
const useUpComing=()=>{

    const dispatch=useDispatch();

    const getUpComing=async ()=>{
        const data=await fetch(upComing,API_OPTIONS);
        const json=await data.json();
        dispatch(addUpComing(json.results));
    }
    
    useEffect(()=>{
        getUpComing();
    },[])

}

export default useUpComing;