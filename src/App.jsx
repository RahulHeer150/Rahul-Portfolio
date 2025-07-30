import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Components/Homepage/Home'
import Navbar from './Components/navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import About from './Components/About'
import Projects from './Components/Projects'
import BlurBlob from './Components/Homepage/BlurBlob'
import Loader from '../public/Loader.gif'
import { useEffect} from 'react'

function App() {
  const [menuOpen, SetMenuopen] = useState(false)
   const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
    <Loader load={load}/>
      <Navbar />
      <div className="bg-[#050414] min-h-screen">
        <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
