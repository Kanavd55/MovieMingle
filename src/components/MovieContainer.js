import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  const { nowPlayingMovies, popular, topRated, upComing } = movies;
  return (
    <div className="w-full bg-black">
      <MoviesList movies={nowPlayingMovies} title={"NowPlaying Movies"} />
      <MoviesList movies={popular} title={"Popular Movies"} />
      <MoviesList movies={topRated} title={"Top-Rated Movies"} />
      <MoviesList movies={upComing} title={"Up-Coming Movies"} />
    </div>
  );
};

export default MovieContainer;
