import React from 'react'
import logoimage from '../assets/logoimage.jpg'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={logoimage} alt="netflixlogo" className='w-35 h-25' />

      
    </div>
  )
}

export default Header
