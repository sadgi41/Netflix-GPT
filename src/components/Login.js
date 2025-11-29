import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
     const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // let message;
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                     console.log(user);
                     navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg"
                />
            </div>
            <div className='flex justify-center '>
                <form onSubmit={(e) => e.preventDefault()}
                    className='absolute bg-black bg-opacity-75 w-3/12 p-12  my-36 mx-auto left-0 right-0 text-white rounded-lg'>

                    <h1 className='text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                    {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-2  w-full bg-slate-600' />}

                    <input ref={email} type='text' placeholder='Email' className='p-2 my-2  w-full bg-slate-600' />

                    <input ref={password} type='password' placeholder='Password' className='p-2  my-2 bg-slate-600  w-full' />

                    <p className='text-red-600 text-lg'>{errorMessage}</p>

                    <button className='p-2  my-4   bg-red-700 rounded-lg w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                    <p className='my-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered. Sign In Then."}</p>
                </form>
            </div>

        </div>
    )
}

export default Login
