import React from 'react'
import Home1 from './Home1' 
import Home2 from './Home2'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
      
        <Home1/>
        <Home2/>
    </div>
  )
}

export default Home