import { API_OPTIONS, popular } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/moviesSlice";    
import { useEffect } from "react";
    
const usePopular=()=>{

    const dispatch=useDispatch();

    const getPopular=async ()=>{
        const data=await fetch(popular,API_OPTIONS);
        const json=await data.json();
        dispatch(addPopular(json.results));
    }
    
    useEffect(()=>{
        getPopular();
    },[])

}

export default usePopular;