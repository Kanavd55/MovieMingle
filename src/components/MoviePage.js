import React, { useEffect, useState } from "react";
import Header from "./Header";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const MoviePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const getTrendingMovies = async () => {
    if (totalPages && totalPages === page) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=" +
        page,
      API_OPTIONS
    );
    const json = await data.json();
    setTotalPages(json.total_pages);
    const filter = await json?.results.filter((data) => {
      return data.poster_path !== null;
    });
    const list = trendingMovies;
    const newList = await list.concat(filter);
    setTrendingMovies(newList);
  };

  useEffect(() => {
    getTrendingMovies();
  }, [page]);
  return (
    <div className="h-screen text-white bg-stone-900">
      <Header />
      <div className="pt-24 bg-stone-900">
        {trendingMovies?.length>0 ? (<div className="w-full mx-auto bg-stone-900 p-10 pt-20">
          <p className=" text-2xl font-semibold">Trending Movies</p>
          <div className="flex mx-auto mt-4 p-2 justify-between flex-wrap">
            {trendingMovies?.map((movie) => {
              return (
                <Link to={"/movieInfo/"+movie.id} key={movie.id}>
                <div className="mx-auto mt-2 md:m-2 hover:underline w-32 md:w-44">
                  <img
                    className="w-full rounded-md"
                    src={IMG_CDN + movie.poster_path}
                  />
                  <p className="text-center text-lg">
                    {movie.original_title}
                  </p>
                </div>
                </Link>
              );
            })}
          </div>
          <div className="w-full flex justify-center">
          <button onClick={()=>setPage(page+1)} className="bg-red-700 hover:bg-red-800 rounded-lg text-sm p-2">View More</button>
          </div>
        </div>):(
            <Loader/>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
