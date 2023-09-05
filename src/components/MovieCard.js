import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-44 py-6 ml-6 ">
        <img className="h-auto ml-2 rounded-lg" src={IMG_CDN + posterPath} />
        <p className="p-2 text-white text-center text-md ">{title}</p>
      </div>
    </>
  );
};

export default MovieCard;
