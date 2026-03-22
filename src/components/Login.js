import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const[IsSignin,setIsSignIn] = useState(true);
  const togglesSignInForm =() =>{
    setIsSignIn(!IsSignin)
  }
  return (
    <div>
      <Header />
      <div className='absolute w-56 px-8 py-8 bg-gradient-to-b from-black z-10'>
        <img
          src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt="Netflix Logo"
        />
      </div>
      <div className="w-3/12 p-12 absolute bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <form>
          <h1 className="font-bold text-3xl py-4">{IsSignin ? "Sign In" : "Sign Up"}</h1>
          {!IsSignin && (
            <input
          type="text" placeholder="Enter Your Name" className="p-2 my-4 w-full bg-gray-700" 
          />
          )}
          <input 
           type="text" placeholder="Email address" className="p-2 my-4 w-full bg-gray-700" 
           />

          <input 
          type="password" placeholder="Password" className="p-2 my-4 w-full  bg-gray-700" 
          />

          <button 
          className="p-4 my-6 bg-red-700 w-full rounded hover:bg-red-600 font-semibold tracking-wide">
          {IsSignin ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={togglesSignInForm}>{ IsSignin ? "New to Netflix? Sign up now!" : "Already a user! Sign In"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login;