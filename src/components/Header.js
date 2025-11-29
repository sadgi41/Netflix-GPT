import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
     navigate("/error");
    });
  }
  return (

    <div className='absolute w-screen px-12 bg-gradient-to-b from-black z-50 flex justify-between'>
      <img className='w-60' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png'
      />

      <button onClick={handleSignOut} className='font-bold text-2xl text-white'>Sign Out</button>
    </div>
  );
}

export default Header
