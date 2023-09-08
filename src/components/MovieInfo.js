import React from "react";
import Header from "./Header";
import MovieInfoCard from "./MovieInfoCard";
import { useParams } from "react-router-dom";
import MoviesList from "./MoviesList";
import useMovieInfo from "../hooks/useMovieInfo";
import CastList from "./CastList";


const MovieInfo = () => {
  const { movieId } = useParams();

  const { movieInfo, recommendations,casts,trailer } = useMovieInfo(movieId);

  return (
    <div className="bg-stone-900">
      <Header />
      <MovieInfoCard movieInfo={movieInfo} trailer={trailer}/>
      <CastList casts={casts} title="Movie Casts"/>
      <MoviesList title="Recommendataions" movies={recommendations} />
    </div>
  );
};

export default MovieInfo;
