import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { NAV_CROSS_IMG_URL, NAV_IMG_URL } from "../utils/constants";
import toast from "react-hot-toast";

const Header = () => {
  const [showLinks,setShowLinks]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast(user.displayName +" is logged out")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        if(window.location.pathname==="/"){
          navigate("/browse");
        }
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        if(window.location.pathname!=="/"){
          navigate("/");
        }
        // ...
      }
    });
  }, []);
  return (
    <>
    <div className="absolute z-20 bg-stone-800 p-2 py-3 opacity-95 shadow-md flex justify-between w-full">
      <div className=" text-red-600 font-sans text-4xl p-4 ml-4 font-bold">
        <Link to={"/browse"}>CineUniverse</Link>
      </div>
        {user && (<><div className="hidden xl:flex xl:flex-row">
          <Link to={"/browse"}>
          <button
            className="text-white hover:underline text-lg font-bold  p-5 mr-5"
          >Home
          </button>
          </Link>
        <Link to={"/movies"}>
        <button
            className="text-white hover:underline text-lg font-bold  p-5 mr-5"
          >Movies
          </button>
        </Link>
        <Link to={"/tvShow"}>
        <button
            className="text-white hover:underline text-lg font-bold  p-5 mr-5"
          >Tv Shows
          </button>
        </Link>
        <Link to={"/person"}>
        <button
            className="text-white hover:underline text-lg font-bold  p-5 mr-5"
          >Person
          </button>
        </Link>
        <Link to={"/developerInfo"}>
        <button
            className="text-white text-lg hover:underline font-bold  p-5 mr-5"
          >Developer
          </button>
        </Link>
        <Link to={"/search"}>
      <button
            className="text-white text-lg hover:underline font-bold  p-5 mr-5"
          >Search 🔎
          </button></Link>
          <button
            className="text-white text-lg font-bold  p-5 mr-5 hover:underline "
            onClick={handleSignOut}
          >
            Log out
          </button>
          </div>
          <div onClick={()=>setShowLinks(!showLinks)} className="text-white text-lg font-bold  p-5 mr-5 flex xl:hidden">{!showLinks ?(
            <img className=" h-6" src={NAV_IMG_URL} alt="Nav-Bar"/>
          ):<img className=" h-6" src={NAV_CROSS_IMG_URL} alt="Nav-Bar-Cross"/>}
          </div>
          </>
        )}
    </div>{user && (<>
    {showLinks ? (
      <div className="flex flex-col absolute w-screen z-10  bg-stone-800  pt-24 justify-center mx-auto xl:hidden">
        <Link to={"/browse"}>
        <button
      className="text-white text-lg font-bold p-5 w-full mx-auto hover:underline"
    >Home
    </button>
        </Link>
        <Link to={"/movies"}>
  <button
      className="text-white text-lg font-bold p-5 w-full mx-auto hover:underline"
    >Movies
    </button>
  </Link>
  <Link to={"/tvShow"}>
  <button
      className="text-white text-lg font-bold  p-5 w-full mx-auto hover:underline"
    >Tv Shows
    </button>
  </Link>
  <Link to={"/person"}>
  <button
      className="text-white text-lg font-bold  p-5 w-full mx-auto hover:underline"
    >Person
    </button>
  </Link>
  <Link to={"/developerInfo"}>
  <button
      className="text-white text-lg font-bold  p-5 mx-auto w-full hover:underline"
    >Developer
    </button>
  </Link>
  <Link to={"/search"}>
<button
      className="text-white text-lg font-bold  p-5 mx-auto w-full hover:underline"
    >Search
    </button></Link>
    <button
      className="text-white text-lg font-bold  p-5 mx-auto w-full hover:underline"
      onClick={handleSignOut}
    >
      Log out
    </button>
      </div>
    ):""}
    </>)}
    </>
  );
};

export default Header;
