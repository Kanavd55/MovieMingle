import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieInfo = (movieId) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [casts,setCasts]=useState(null);
  const [trailer,setTrailer]=useState(null);
  const getMovieInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    setMovieInfo(json);
  };

  const getRecommendations = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/recommendations?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const filter = await json.results.filter((movie) => {
      return movie.poster_path !== null;
    });
    setRecommendations(filter);
  };

  const getMovieTrailer=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
    const json=await data.json();
    const filterData=json.results.filter((data)=>{
        return (data.name==="Official Trailer" && data.type==="Trailer")
    })
    console.log(filterData);
    const trailer=filterData?.length>0 ?filterData[0]:json.results[0];
    setTrailer(trailer);
}

  const getCredits=async ()=>{
    const data =await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=en-US",API_OPTIONS);
    const json=await data.json();
    setCasts(json.cast);
  }

  useEffect(() => {
    getMovieInfo();
    getRecommendations();
    getCredits();
    getMovieTrailer();
  }, [movieId]);

  return {
    movieInfo: movieInfo,
    recommendations: recommendations,
    casts:casts,
    trailer:trailer
  };
};

export default useMovieInfo;
