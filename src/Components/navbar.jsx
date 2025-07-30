import React, { useEffect, useState } from 'react'
import { FiMenu,FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FaFileSignature } from 'react-icons/fa6';
import About from './About';



const Navbar = () => {
  const[IsOpen,setIsOpen]=useState(false)
  const[activeSection,setActiveSection]=useState("")
  const[isScrolled,setIsScrolled]=useState(false)
  useEffect(()=>{
    const handlescroll=()=>{
      setIsScrolled(window.scrollY>50)
    };

    window.addEventListener("scroll",handlescroll);
    return()=> window.removeEventListener("scroll",handlescroll)
  },[]);
  const handlemenuClick=(sectionId)=>{
      setActiveSection(sectionId);
      setIsOpen(false);
  }
      const MenuItems = [
  { id: "home", label: "Home", icon: <AiOutlineHome className="inline mr-2" />, to: "/" },
  { id: "about", label: "About", icon: <AiOutlineUser className="inline mr-2" />, to: "/about" },
  { id: "project", label: "Project", icon: <AiOutlineFundProjectionScreen className="inline mr-2" />, to: "/projects" },
  { id: "skills", label: "Skills", icon: <AiFillStar className="inline mr-2" />, to: "/skills" },
];

  return (
    <>
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[12vw] lg:px-[10vw] ${isScrolled ? "bg-[#05041480] bg-opacity-80 backdrop:blur-3xl shadow-md":"bg-transparent"}`}>
      <div className='text-white py-4 px-1 flex flex-row justify-between items-center'>
        <img src="/profile.png" alt="" className='h-8 w-13'/>
        <ul className=' hidden lg:flex space-x-8 text-white ml-8 text-3xl text-bold'>
          {MenuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-sky-400 ${activeSection === item.id ? "text-sky-500" : ""}` }>
              <Link className="flex items-center gap-2 border-b-4 border-transparent hover:border-sky-400 pb-2 hover:text-sky-400  transition-all duration-300 " 
              to={item.to}
              onClick={()=>handlemenuClick(item.id)}>
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
         
         <div className='lg:hidden'>
          {
            IsOpen ?
            (
              <FiX className='text-3xl text-sky-400 cursor-pointer' onClick={()=>setIsOpen(false)}/>
            ):(
              <FiMenu className='text-3xl text-sky-400 cursor-pointer' onClick={()=>setIsOpen(true)}/>
            )
          }
         </div>
      </div>
      {IsOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-white'>
              {MenuItems.map((item) => (
            <li key={item.id} className='cursor-pointer '>
              <Link  className="flex items-center gap-2 border-b-4 border-transparent hover:border-white hover:text-gray-300 transition-all duration-200 " 
              to={item.to}
              onClick={()=>handlemenuClick(item.id)}>
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
          </ul>
        </div>
      )}
    </nav>
    
    
    </>
  ) 
}

export default Navbar