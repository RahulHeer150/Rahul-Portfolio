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

function App() {
  const [menuOpen, SetMenuopen] = useState(false)

  return (
    <BrowserRouter>
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
