import React from 'react'
import Header from './Header'
import { useState } from 'react';


const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);

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
<form className='absolute bg-black bg-opacity-75 w-3/12 p-12  my-36 mx-auto left-0 right-0 text-white rounded-lg'>
   <h1 className='text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
   {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-2  w-full bg-slate-600'/>}
    <input type='text' placeholder='Email' className='p-2 my-2  w-full bg-slate-600'/>
    <input type='password' placeholder='Password' className='p-2  my-2 bg-slate-600  w-full'/>
    <button className='p-2  my-4   bg-red-700 rounded-lg w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
    <p className='my-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered. Sign In Then."}</p>
</form>
</div>

        </div>
    )
}

export default Login
