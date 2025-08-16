import React, { useState } from 'react'
import Header from './Header'
import back from '../assets/back.jpg'

const Login = () => {

  const [isSignInForm, setIsSignForm] = useState(true);


  const toggleSignInform =()=>{

    setIsSignForm(!isSignInForm);
  }



  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src={back} 
        alt="background" 
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Header */}
      <Header />

      {/* Form Container */}
      <div className="flex items-center justify-center h-full">
        <form className="bg-black bg-opacity-70 p-8 rounded-lg w-[400px]">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">{isSignInForm?"Sign In":"Sign UP"}</h2>
            {!isSignInForm &&(
              <input type='text' placeholder='Full name'
                 className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}
          <input 
            type="text" 
            placeholder="Email or Mobile Number" 
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <button 
            type="submit" 
            className="w-full bg-red-600 text-white p-3 rounded font-semibold hover:bg-red-700 transition duration-300"
          >
            Sign In
          </button>

          <p className="text-gray-400 mt-4 text-center cursor-pointer hover:underline" onClick={toggleSignInform}>
            {/* New to Netflix? <span className="text-white cursor-pointer hover:underline">Sign Up now.</span> */}
            {isSignInForm?"New to Netflix? Sign Up":"Already Registered ? Sign In"}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
