import { useState,useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieInfo = (movieId) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const getMovieInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    setMovieInfo(json);
  };

  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const filter = await json.results.filter((movie) => {
      return movie.poster_path !== null;
    });
    setSimilarMovies(filter);
  };

  useEffect(() => {
    getMovieInfo();
    getSimilarMovies();
  }, [movieId]);

  return {
    movieInfo:movieInfo,
    similarMovies:similarMovies
  }
};

export default useMovieInfo;
