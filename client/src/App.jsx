import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'



function App() {
  return (
    <div className=''>
      <ParticleBackground/>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App