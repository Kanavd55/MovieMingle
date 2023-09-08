import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { Fade } from "react-reveal";

const DeveloperInfoCard = () => {
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/Kanavd55");
    const json = await data.json();
    setUserInfo(json);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="h-screen bg-stone-900">
      <div className="h-auto bg-stone-900 -z-10">
        {userInfo ? (
          <div className=" mx-auto pt-56 md:pt-28 rounded-lg pb-10 bg-stone-800 w-8/12 flex flex-wrap">
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
                </p>
                <p className="my-4">
                  <span className="text-gray-200 text-xl font-semibold my-3">
                    Skills
                  </span>
                  <p className="text-gray-300 break-words my-2">
                    Html,Css,Javascript,Reactjs,Tailwind Css,Git,Core
                    Java,Sql,Linux
                  </p>
                </p>
                <p className="my-6 text-gray-300 ">{userInfo.location},India</p>
                <div className="flex flex-wrap justify-start">
                  <Link
                    to={"https://www.linkedin.com/in/kd28/"}
                    target="_blank"
                    className="bg-sky-800 mr-2 font-semibold text-white rounded-lg p-3 hover:bg-sky-900"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    to={"https://github.com/Kanavd55"}
                    target="_blank"
                    className=" text-white font-semibold rounded-lg p-3 mx-2 bg-black hover:bg-gray-950"
                  >
                    Github
                  </Link>
                  <Link
                    to={"mailto:kanavdahat55@gmail.com"}
                    target="_blank"
                    className=" text-red-700 font-semibold rounded-lg p-3 mx-2 bg-white hover:bg-gray-300"
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
    </div>
  );
};

export default DeveloperInfoCard;
