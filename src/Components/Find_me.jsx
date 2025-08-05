import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Find = () => {
    const social=[
        {icon: <AiFillGithub size={30}/>,to:"https://github.com/RahulHeer150"},
        {icon: <AiFillInstagram size={30}/>,to:"/instagram.com/official_rahulheer"},
        {icon: <AiOutlineTwitter size={30}/>,to:"/"},
        {icon: <FaLinkedinIn size={30}/>,to:"/"}
       
      ]
  return (
     <div className="bg-aboutgradient py-24 pb-24 md:px-[4vw] px-[6vw] lg:px-[10vw] bg-[#050414] mt-5">
     <h1 className="text-5xl font-sans text-white text-center pt-6">
          FIND {" "}
          <span className="text-5xl font-sans text-sky-400 text-center">
             ME!
          </span>{" "}
          ON
        </h1>
         <p className="text-white text-4xl text-center pt-4">
          Feel Free to <span className="text-sky-400">Connect!</span> on
        </p>
        <div className=" flex gap-5 pt-6 item-center justify-center">
           {social.map((social, index) => (
          <Link
            key={index}
            className="w-17 h-17 p-3 bg-sky-500 text-center text-black  hover:scale-110 transition-transform duration-300 border rounded-full"
          >
            {social.icon}
          </Link>
        ))}
    </div>
    </div>
 )
}

export default Find