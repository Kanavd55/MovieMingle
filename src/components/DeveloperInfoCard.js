import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { Fade } from "react-reveal";
import Footer from "./Footer";
import { Get_Developer_Info_URL } from "../utils/constants";

const DeveloperInfoCard = () => {
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = async () => {
    const data = await fetch(Get_Developer_Info_URL);
    const json = await data.json();
    setUserInfo(json);
  };
  useEffect(() => {
    getUserInfo();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <div className="h-screen bg-stone-900">
        <div className="h-auto bg-stone-900 pb-20 -z-10">
          {userInfo ? (
            <div className=" mx-auto pt-32 pb-10 md:pt-28 rounded-lg bg-stone-800 w-8/12 flex flex-wrap">
              <div className="w-full p-4 md:p-8 mx-auto md:w-1/2 ">
                <Fade left>
                  <img
                    className="rounded-lg w-full  md:w-3/4"
                    src={userInfo.avatar_url}
                    alt="movie-poster"
                  />
                </Fade>
              </div>
              <div className="w-full p-4 md:mx-auto md:w-1/2 text-white">
                <Fade top>
                  <p className="my-6">
                    <span className="text-3xl my-3">{userInfo.name}</span>
                    <p className="my-2 text-gray-300">System Engineer</p>
                    <p className="my-2 text-gray-300">
                      Tata Consultancy Services
                    </p>
                    <p className="my-2 text-gray-300 ">
                    {userInfo.location},India
                  </p>
                  </p>
                  <p className="my-4">
                    <span className="text-gray-200 text-xl font-semibold my-3">
                      About CineUniverse
                    </span>
                    <p className="text-gray-300 break-words my-2">
                      CineUniverse: Your go-to source for trending movies,
                      top-rated films, and hot TV shows. Explore, search, and
                      watch trailers effortlessly with our user-friendly
                      interface, powered by the reliable TMDB API. Dive into the
                      world of entertainment today!
                    </p>
                  </p>
                  
                  <p className="text-gray-200 text-xl font-semibold mt-8">Connect with me</p>
                  <div className="flex flex-wrap justify-start">
                  <Link
                      to={"https://kanav-portfolio.netlify.app"}
                      target="_blank"
                      className=" my-2 text-black font-semibold rounded-lg p-3 mx-2 bg-white hover:bg-gray-300"
                    >
                      Portfolio 
                    </Link>
                    <Link
                      to={"https://www.linkedin.com/in/kd28/"}
                      target="_blank"
                      className="bg-sky-800 mr-2 my-2 font-semibold text-white rounded-lg p-3 hover:bg-sky-900"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      to={"https://github.com/Kanavd55"}
                      target="_blank"
                      className=" my-2 text-white font-semibold rounded-lg p-3 mx-2 bg-black hover:bg-gray-900"
                    >
                      Github
                    </Link>
                    <Link
                      to={"mailto:kanavdahat55@gmail.com"}
                      target="_blank"
                      className="my-2 text-white font-semibold rounded-lg p-3 mx-2 bg-red-700 hover:bg-red-600"
                    >
                      Gmail
                    </Link>
                    
                  </div>
                </Fade>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DeveloperInfoCard;
