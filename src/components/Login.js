import React, { useState,useRef } from 'react'
import Header from './Header';
import {CheckValidation} from "../utils/Validate";

const Login = () => {
  const[IsSignin,setIsSignIn] = useState(true);
  const[errormessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togglesSignInForm =() =>{
    setIsSignIn(!IsSignin)
  }

  const HandleButtonClick = () => {
  console.log("IsSignin:", IsSignin);
  console.log("name ref:", name.current);
  console.log("name value:", IsSignin ? null : name.current.value);
  console.log("email value:", email.current.value);
  console.log("password value:", password.current.value);

  const message = CheckValidation(
    email.current.value, 
    password.current.value, 
    IsSignin ? null : name.current.value
  );
  console.log("validation message:", message);
  setErrorMessage(message);
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
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-3xl py-4">{IsSignin ? "Sign In" : "Sign Up"}</h1>
          {!IsSignin && (
            <input
            ref={name}
          type="text" placeholder="Enter Your Name" className="p-2 my-4 w-full bg-gray-700" 
          />
          )}
          <input 
          ref={email}
           type="text" placeholder="Email address" className="p-2 my-4 w-full bg-gray-700" 
           />

          <input 
          ref={password}
          type="password" placeholder="Password" className="p-2 my-4 w-full  bg-gray-700" 
          />

          <p className="text-red-600 font-bold text-lg py-2">{errormessage}</p>

          <button 
          className="p-4 my-6 bg-red-700 w-full rounded hover:bg-red-600 font-semibold tracking-wide" onClick={HandleButtonClick}>
          {IsSignin ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={togglesSignInForm}>{ IsSignin ? "New to Netflix? Sign up now!" : "Already a user! Sign In"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login;