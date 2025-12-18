import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO , DP } from '../utils/constants';

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
  return (

    <div className='absolute w-screen px-12 bg-gradient-to-b from-black z-50 flex justify-between'>
      <img className='w-60' src={LOGO}
      />

      <div className='flex items-center gap-4'>
        <img className='w-10 h-10' src = {DP} />
        <button onClick={handleSignOut} className='font-bold text-2xl text-white'>Sign Out</button>
      </div>

      
    </div>
  );
}

export default Header
