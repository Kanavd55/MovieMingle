import React from "react";
import { IMG_CDN } from "../utils/constants";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const MovieInfoCard = ({ movieInfo }) => {
  return (
    <div className="h-auto bg-stone-900 -z-10">
      {movieInfo ? (
        <div className=" mx-auto pt-56 md:pt-28 rounded-lg bg-stone-800 w-8/12 flex flex-wrap">
          <div className="w-full p-4 md:p-8 mx-auto md:w-1/2 ">
            <Fade left>
            <img
              className="rounded-lg w-full  md:w-3/4"
              src={IMG_CDN + movieInfo.poster_path}
              alt="movie-poster"
            /></Fade>
          </div>
          <div className="w-full p-4 md:mx-auto md:w-1/2 text-white">
            <Fade top>
              <p className="my-6">
                <span className="text-3xl my-3">{movieInfo.original_title}</span>
                <p className="my-2 text-gray-300">{movieInfo.genres.map((genre)=>genre.name).join(",")}</p>
              </p>
              <p className="my-4">
                <span className="text-gray-200 text-xl font-semibold my-3">Overview</span>
                <p className="text-gray-300 break-words my-2">{movieInfo.overview.split(" ", 60).join(" ")}...</p>
              </p>
              <p className="my-6 text-gray-300 ">Released date :-{movieInfo.release_date}</p>
            <Link to={movieInfo.homepage } target="_blank" className="bg-red-700 text-white rounded-lg p-3 hover:bg-red-800">Watch Now</Link>
            </Fade>
          </div>
        </div>
      ):(
        <Loader/>
      )}
    </div>
  );
};

export default MovieInfoCard;
