import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieInfo = (movieId) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [casts,setCasts]=useState(null);
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

  const getCredits=async ()=>{
    const data =await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=en-US",API_OPTIONS);
    const json=await data.json();
    setCasts(json.cast);
  }

  useEffect(() => {
    getMovieInfo();
    getRecommendations();
    getCredits();
  }, [movieId]);

  return {
    movieInfo: movieInfo,
    recommendations: recommendations,
    casts:casts
  };
};

export default useMovieInfo;
