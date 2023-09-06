import React, { useRef, useState } from 'react'
import Header from './Header'
import { API_OPTIONS, IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';


const SearchPage = () => {

  const search=useRef(null);
  const [person,setPerson]=useState(null);
  const [movies,setMovies]=useState(null);
  const [tvShows,setTvShows]=useState(null);

  const getSearchItems=async(searchData)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/multi?query="+searchData+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json=await data.json();
    const movies=await json.results.filter((movie)=>{
      return movie.media_type==="movie"
    })
    const movieData=await movies?.filter((movie)=>{
      return movie.poster_path!==null
    })
    const person=await json.results.filter((person)=>{
      return person.media_type==="person"
    })
    const personData=await person?.filter((person)=>{
      return person.profile_path!==null
    })
    const tv=await json.results.filter((tv)=>{
      return tv.media_type==="tv"
    })
    const tvData=await tv?.filter((tv)=>{
      return tv.poster_path!==null
    })
    setMovies(movieData);
    setPerson(personData);
    setTvShows(tvData);
  }

  const handleSearch=(e)=>{
    e.preventDefault();
    const searchData=search.current.value.split(" ").join("%20");
    getSearchItems(searchData)
  }
  return (
    <div className='bg-stone-900 h-screen'>
        <Header/>
        <div className='w-full pt-40 text-white'>
          <form className='w-8/12 mx-auto border rounded-md'>
            <input ref={search} className='w-9/12 p-2 bg-stone-800  border-b-0' placeholder='Search for Person,Movies or TV Shows' type='text'/>
            <button onClick={handleSearch} className='bg-red-600 w-3/12 p-2 border font-semibold'>Search</button>
          </form>
        </div>
        <div className='w-full bg-stone-900 h-auto mt-14'>
          {movies && (<div className='mx-auto w-10/12'>
            <p className='text-white font-semibold text-4xl m-2'>{movies.length!==0? "Movies":""}</p>
            <div className='flex flex-wrap justify-start'>
              {movies?.map((movie)=>{
                return (
                  <Link to={"/movieInfo/"+movie.id} key={movie.id}>
                  <div className='p-2 w-40'>
                    <img className='w-full rounded-lg' alt="movie-img" src={IMG_CDN+movie.poster_path}/>
                    <p className='text-center text-white break-words'>{movie.title}</p>
                  </div>
                  </Link>
                )
              })}
            </div>
          </div>)}
          {tvShows && (<div className='mx-auto w-10/12'>
            <p className='text-white font-semibold text-4xl m-2'>{tvShows.length!==0? "TV Shows":""}</p>
            <div className='flex flex-wrap justify-start'>
              {tvShows?.map((tvShow)=>{
                return (
                  <div key={tvShow.id} className='p-2 w-40'>
                    <img className='w-full rounded-lg' alt="movie-img" src={IMG_CDN+tvShow.poster_path}/>
                    <p className='text-center text-white break-words'>{tvShow.original_name}</p>
                  </div>
                )
              })}
            </div>
          </div>)}
          {person && (<div className='mx-auto w-10/12'>
            <p className='text-white font-semibold text-4xl m-2'>{person.length!==0? "People":""}</p>
            <div className='flex flex-wrap justify-start'>
              {person?.map((p)=>{
                return (
                  <Link to={"/person/"+person.id} key={person.id}>
                  <div className='p-2 w-40'>
                    <img className='w-full rounded-lg' alt="movie-img" src={IMG_CDN+p.profile_path}/>
                    <p className='text-center text-white break-words'>{p.original_name}</p>
                  </div>
                  </Link>
                )
              })}
            </div>
          </div>)}
        </div>
    </div>
  )
}

export default SearchPage
