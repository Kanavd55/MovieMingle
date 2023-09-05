import React from "react";
import Header from "./Header";
import MovieInfoCard from "./MovieInfoCard";
import { useParams } from "react-router-dom";
import MoviesList from "./MoviesList";
import useMovieInfo from "../hooks/useMovieInfo";

const MovieInfo = () => {
  const { movieId } = useParams();

  const { movieInfo, similarMovies } = useMovieInfo(movieId);

  return (
    <div className="bg-black">
      <Header />
      <MovieInfoCard movieInfo={movieInfo} />
      <MoviesList title="Similar Movies" movies={similarMovies} />
    </div>
  );
};

export default MovieInfo;
