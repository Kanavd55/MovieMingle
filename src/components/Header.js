import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

const Header = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
              }))
              navigate("/browse");
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
              // ...
            }
          });
    },[])
  return (
    <div className='absolute bg-gradient-to-br from-black p-2 flex justify-between w-full'>
      <div className=' text-red-600 text-3xl p-4 ml-3 font-bold'>
        MovieMingle
      </div>
      <div>
        {user && <button className='text-white text-lg font-bold p-4 mr-5 hover:underline ' onClick={handleSignOut}>Log out</button>}
      </div>
    </div>
  )
}

export default Header;