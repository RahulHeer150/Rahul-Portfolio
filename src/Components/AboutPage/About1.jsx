import React from 'react'

const About1 = () => {
  return (
   <div className='bg-aboutgradient py-24 pb-24 md:px-[4vw] px-[6vw] lg:px-[10vw] bg-[#050414]'> 
     <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-7/12
         text-center md:text-left mt-8 md:mt-0 text-white'>
        <h1 className='text-center text-white text-5xl'>KNOW WHO <span className='text-sky-400'>I'M</span></h1>
         <p className="pt-12 text-left text-3xl text-white">
  👋 Hi, I'm Rahul Heer, a B.tech student and aspiring Frontend developer passionate about crafting innovative web solutions. With a strong foundation in <b className='text-sky-400'><i>HTML, CSS, JavaScript</i></b> also, I'm dedicated to creating exceptional user experiences. Currently focused on refining my skills and exploring new technologies, I'm excited about continuous learning and growth in web development. 

  <br />
  <br />
  My journey is fueled by a deep-seated curiosity to build impactful solutions that resonate with users. Leveraging tools like <b className="text-sky-400">Node.js</b> and modern JavaScript libraries and frameworks such as <i><b className="text-sky-400">React.js</b></i>, I bring ideas to life, one line of code at a time.
  <br />
  <br />
  🚀 Feel free to reach out for discussions, idea exchange, or potential collaborations.
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