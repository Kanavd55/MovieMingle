import React, { useRef, useState } from "react";
import Header from "./Header";
import { API_OPTIONS, IMG_CDN, Search_Api_URL1, Search_Api_URL2 } from "../utils/constants";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Footer from "./Footer";
import toast from "react-hot-toast";

const SearchPage = () => {
  const search = useRef(null);
  const [person, setPerson] = useState(null);
  const [movies, setMovies] = useState(null);
  const [tvShows, setTvShows] = useState(null);

  const getSearchItems = async (searchData) => {
    const data = await fetch(
      Search_Api_URL1 +
        searchData +
        Search_Api_URL2,
      API_OPTIONS
    );
    const json = await data.json();
    const movies = await json.results.filter((movie) => {
      return movie.media_type === "movie";
    });
    const movieData = await movies?.filter((movie) => {
      return movie.poster_path !== null;
    });
    const person = await json.results.filter((person) => {
      return person.media_type === "person";
    });
    const personData = await person?.filter((person) => {
      return person.profile_path !== null;
    });
    const tv = await json.results.filter((tv) => {
      return tv.media_type === "tv";
    });
    const tvData = await tv?.filter((tv) => {
      return tv.poster_path !== null;
    });
    setMovies(movieData);
    setPerson(personData);
    setTvShows(tvData);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = search.current.value.split(" ").join("%20");
    getSearchItems(searchData);
    toast("Search button clicked");
  };
  return (
    <div className="bg-stone-900 h-screen">
      <Header />
      <div className="w-full pt-40 text-white">
        <form className="w-11/12 md:w-8/12 mx-auto border rounded-md">
          <input
            ref={search}
            className="w-10/12 md:w-9/12 p-2 text-sm md:text-base bg-stone-800  border-b-0"
            placeholder="Search for your favourite Person,Movies or TV Shows"
            type="text"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 w-2/12 md:w-3/12 p-2 border text-sm md:text-base font-semibold"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full bg-stone-900 h-auto mt-14 pb-24 md:pb-36 xl:pb-48">
        {movies && (
          <div className="mx-auto w-10/12">
            <p className="text-white font-semibold text-4xl m-2">
              {movies.length !== 0 ? "Movies" : ""}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              {movies?.map((movie) => {
                return (
                  <Link to={"/movieInfo/" + movie.id} key={movie.id}>
                    <div className="p-2 w-40">
                      <img
                        className="w-full rounded-lg"
                        alt="movie-img"
                        src={IMG_CDN + movie.poster_path}
                      />
                      <p className="text-center text-white break-words">
                        {movie.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {tvShows && (
          <div className="mx-auto w-10/12">
            <p className="text-white font-semibold text-4xl m-2">
              {tvShows.length !== 0 ? "TV Shows" : ""}
            </p>
            <div className="flex flex-wrap justify-start">
              {tvShows?.map((tvShow) => {
                return (
                  <Link to={"/tvShow/" + tvShow.id} key={tvShow.id}>
                    <div className="p-2 w-40">
                      <img
                        className="w-full rounded-lg"
                        alt="movie-img"
                        src={IMG_CDN + tvShow.poster_path}
                      />
                      <p className="text-center text-white break-words">
                        {tvShow.original_name}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {person && (
          <div className="mx-auto w-10/12">
            <p className="text-white font-semibold text-4xl m-2">
              {person.length !== 0 ? "People" : ""}
            </p>
            <div className="flex flex-wrap justify-start">
              {person?.map((p) => {
                return (
                  <Link to={"/person/" + p.id} key={p.id}>
                    <div className="p-2 w-40">
                      <img
                        className="w-full rounded-lg"
                        alt="movie-img"
                        src={IMG_CDN + p.profile_path}
                      />
                      <p className="text-center text-white break-words">
                        {p.original_name}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {movies?.length === 0 &&
          tvShows?.length === 0 &&
          person?.length === 0 && (
            <Fade top>
              <div className="text-center text-4xl text-white">
                No result found
              </div>
            </Fade>
          )}
      </div>
      <Footer/>
    </div>
  );
};

export default SearchPage;
