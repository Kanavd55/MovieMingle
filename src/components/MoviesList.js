import React from "react";
import { IMG_CDN } from "../utils/constants";
import { Link } from "react-router-dom";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="w-10/12 mx-auto text-white">
      <p className="p-2 m-2 text-2xl font-bold">{title}</p>
      {movies && (
        <div className="flex flex-row flex-wrap">
          {movies.map((movie) => {
            return (
              <Link to={"/movieInfo/" + movie.id} key={movie.id}>
                <div className="w-36 p-1 m-2 ">
                  <img
                    className="rounded-lg"
                    src={IMG_CDN + movie.poster_path}
                    alt="movie"
                  />
                  <p className="text-center">{movie.original_title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
