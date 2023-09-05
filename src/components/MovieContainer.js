import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const MovieContainer = () => {
    const movies=useSelector((store)=>store.movies);
    if(!movies) return;

    const {nowPlayingMovies,popular,topRated,upComing}=movies
  return (
    <div className='w-full bg-black'>
      <MovieList movies={nowPlayingMovies} title={"NowPlaying Movies"}/>
      <MovieList movies={popular} title={"Popular Movies"}/>
      <MovieList movies={topRated} title={"Top-Rated Movies"}/>
      <MovieList movies={upComing} title={"Up-Coming Movies"}/>
    </div>
  )
}

export default MovieContainer
