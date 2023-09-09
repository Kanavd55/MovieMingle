import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/constants";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const userName = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const message = checkValidData(
      email.current.value,
      password.current.value,
      userName
    );
    setErrorMessage(message);
    
    if (message) return;

    if (isSignInForm) {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast("User logged in")
          // ...
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {
              // Profile updated!
              toast("User is created and logged in now!")
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorMessage);
          toast(error);
        });
    }
  };

  return (
    <div className="w-full">
      <Header/>
      <div className="">
        <img alt="bg" className="fixed object-cover h-screen w-full -z-10" src={BG_IMG} />
      </div>
      <form className="w-8/12 md:w-5/12 xl:w-3/12 absolute mx-auto right-0 left-0 my-[30%] md:my-[13%] bg-black p-8 opacity-95 rounded-md text-white">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            className="bg-gray-800 w-full my-5 p-2 "
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="bg-gray-800 w-full my-5 p-2 "
          placeholder="Email"
          type="text"
        />
        <input
          ref={password}
          className="bg-gray-800 w-full my-5 p-2 "
          placeholder="Password"
          type="password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleSubmitForm}
          className="bg-red-800 my-5 w-full p-2 rounded-lg"
        >
          Submit
        </button>
        <p className="py-4 cursor-pointer hover:underline" onClick={toggleForm}>
          {isSignInForm
            ? "New to MovieMingle? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
        {!isSignInForm && (
          <p className=" text-red-500">
            Note:Password should contain at least one lowercase letter, one
            uppercase letter, one numeric digit, and one special character and
            should be between 8 to 15 characters
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
