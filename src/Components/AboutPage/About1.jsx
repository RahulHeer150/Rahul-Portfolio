import React from 'react'

const About1 = () => {
  return (
   <div className='bg-aboutgradient py-24 pb-24 md:px-[4vw] px-[6vw] lg:px-[10vw] bg-[#050414]'> 
     <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-7/12
         text-center md:text-left mt-8 md:mt-0 text-white'>
        <h1 className='text-center text-white text-5xl'>KNOW WHO <span className='text-sky-400'>I'M</span></h1>
         <p className="pt-12 text-left text-3xl text-white">
  As a passionate software developer, I've immersed myself in the world of programming and continuously strive for excellence. Fluent in languages like <i><b className="text-sky-400">C++, JavaScript, and Python</b></i>, I have a keen interest in crafting innovative <i><b className="text-sky-400">Web Technologies and Products</b></i> and exploring the realms of <i><b className="text-sky-400">AI/ML</b></i>.
  <br />
  <br />
  My journey is fueled by a deep-seated curiosity to build impactful solutions that resonate with users. Leveraging tools like <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks such as <i><b className="purple">React.js</b></i>, I bring ideas to life, one line of code at a time.
  <br />
  <br />
  Join me as I embark on this exciting journey of innovation and creativity, where every challenge is an opportunity to learn and grow.
</p>
        </div>
    <div className='md:w-5/12 flex justify-center md:justify-end pt-12'>
    <img src="/about.png" alt=""  className='h-full w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(47,205,216,0.50)]'/>
    </div>
        </div>

   </div>
  )
}

export default About1