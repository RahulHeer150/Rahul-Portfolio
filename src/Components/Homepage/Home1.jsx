import React from 'react'
import Typewriter from 'typewriter-effect'
import Type from './Type'


const Home1 = () => {
  return (
    <section id='about' className='px-4 md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 bg-[#050414]'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>

          <h1 className='text-3xl sm:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h3 className='text-4xl sm:text-5xl md:text-6xl font-bold text-sky-400 mb-4 leading-tight'>Rahul Heer</h3>
          <h3 className='text-xl sm:text-3xl md:text-4xl font-semibold mb-4 text-sky-400 pt-3'>
            <span className='text-white'>
              I am a 
            </span>
            {/* <Typewriter 
            text={[
              'Frontend Developer',
              'MERN Stack Developer',
              'Ui/UX Designer',
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursor={(cursor)=>(
              <span className='text-sky-400'>{cursor}</span>
            )}></Typewriter> */}
            <Type  />
          </h3>
          <p></p>
        </div>
        <div className='md:w-1/2 flex justify-center md:justify-end'>
        <img src="/home1.png" className='w-full h-full' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Home1
