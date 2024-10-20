import React from 'react'
import {logo} from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>

        <button type='button'
        onClick={() => window.open('https://github.com/888Greys/Ai_Article_Summurizor.git')}
        className='black_btn'>
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summirize Articles With <br className='max-md:hidden'/><span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading experience with our AI article summarizer. Transforms lengthy articles into concise summaries.
      </h2>
    </header>
  )
}

export default Hero
