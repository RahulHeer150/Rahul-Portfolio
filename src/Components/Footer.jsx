import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const social = [
    { icon: <AiFillGithub size={25} /> },
    { icon: <AiFillInstagram size={25} /> },
    { icon: <AiOutlineTwitter size={25} /> },
    { icon: <FaLinkedinIn size={25} /> }
  ]
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className='flex flex-col md:flex-row items-center justify-between md:px-[7vw] lg:px-[10vw] font-sans mt-5 md:mt-15 lg:mt-5 bg-[#050414] px-4 py-4 gap-y-4 md:gap-x-6'>
      
      <div className='w-full md:w-1/3 flex justify-center'>
        <h3 className='text-white text-center text-xl'>Get in Touch</h3>
      </div>

      <div className='w-full md:w-1/3 flex justify-center'>
        <h3 className='text-white text-center text-xl'>
          Copyright © {year} <span className='text-sky-400'>Rahul Heer</span>
        </h3>
      </div>

      <div className='w-full md:w-1/3 flex justify-center'>
        <div className="flex gap-5 items-center p-1">
          {social.map((social, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center bg-sky-500 text-black hover:scale-110 transition-transform duration-300 border rounded-full"
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Footer
