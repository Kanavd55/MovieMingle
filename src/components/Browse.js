import React from "react";
import Header from "./Header";
import VideoContainer from "./VideoContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieContainer from "./MovieContainer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";

const Browse = () => {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div className="bg-black">
      <Header />
      <VideoContainer />
      <MovieContainer/>
    </div>
  );
};

export default Browse;
