import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO , DP } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }

const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView())
}

  return (

    <div className='absolute w-screen px-12 bg-gradient-to-b from-black z-50 flex flex-col items-center md:flex-row justify-between'>
      <img className=' w-32 md:w-60' src={LOGO} alt=""
      />

      <div className='flex items-center gap-4'>
        <button onClick={handleGptSearchClick} className='text-white bg-red-500 rounded-lg p-2'>GPT Search</button>
        <img className='md:w-10 md:h-10 md:inline-block hidden' src = {DP} alt="" />
        <button onClick={handleSignOut} className='font-bold text-lg md:text-2xl text-white'>Sign Out</button>
      </div>

      
    </div>
   
  );
}

export default Header
