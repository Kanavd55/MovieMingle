import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
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
    <div className="absolute bg-stone-800 shadow-lg p-2 py-3 opacity-95 flex justify-between w-full">
      <div className=" text-red-600 font-sans text-4xl p-4 ml-4 font-bold">
        <Link to={"/browse"}>MovieMonK</Link>
      </div>
      <div>
        
        {user && (<>
        <Link to={"/movies"}>
        <button
            className="text-white text-lg font-bold  p-5 mr-5"
          >Movies
          </button>
        </Link>
        <Link to={"/tvShow"}>
        <button
            className="text-white text-lg font-bold  p-5 mr-5"
          >Tv Shows
          </button>
        </Link>
        <Link to={"/person"}>
        <button
            className="text-white text-lg font-bold  p-5 mr-5"
          >Person
          </button>
        </Link>
        <Link to={"/developerInfo"}>
        <button
            className="text-white text-lg font-bold  p-5 mr-5"
          >Developer
          </button>
        </Link>
        <Link to={"/search"}>
      <button
            className="text-white text-lg font-bold  p-5 mr-5"
          >Search 🔎
          </button></Link>
          <button
            className="text-white text-lg font-bold  p-5 mr-5 hover:underline "
            onClick={handleSignOut}
          >
            Log out
          </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
