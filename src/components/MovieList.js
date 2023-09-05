import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (<>
    {movies &&(<div className="flex flex-col w-11/12  mx-auto p-4 ">
      <div className="p-1 m-1 text-white font-bold text-2xl">{title}</div>
      <div className="w-[100%] h-auto ">
        <Swiper
          className="p-5 flex flex-row"
          modules={[Pagination, Navigation, Scrollbar]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
        >
          {movies.map((movie)=>{
            return <SwiperSlide key={movie.id}><MovieCard title={movie.original_title} id={movie.id}  posterPath={movie.poster_path}/></SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>)}
    </>
  );
};

export default MovieList;
