import React from 'react'
import Type from './Type'

const Home1 = () => {
  return (
    <section
      id='about'
      className='px-4 md:px-[10vw] lg:px-[20vw] font-sans bg-[#050414] h-screen flex items-center'
    >
      <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-10'>

        {/* Text Section */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h3 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-sky-400 mb-4 leading-tight'>
            Rahul Heer
          </h3>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-400 pt-3'>
            <span className='text-white mr-2'>I am a</span>
            <Type />
          </h2>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img src="/home1.png" className='w-[85%] max-w-[400px] h-auto' alt="Developer Illustration" />
        </div>

      </div>
    </section>
  )
}

export default Home1
