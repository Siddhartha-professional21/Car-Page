import React, { useState } from 'react'
import Background from './components/background/background.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'

const App = () => {
  let heroData = [
    {text1: "Chase", text2: "Your Dreams"},
    {text1: "Ignite", text2: "Your Passions"},
    {text1: "Seize", text2: "Moments"}
  ]
  const [heroCount,setHeroCount] = useState(1);
  const [playStatus,setPlayStatus] = useState(false);

  return (
  <>
  <Background playStatus={playStatus} heroCount={heroCount}/>
  <Navbar/>
  <Hero 
     heroData={heroData[heroCount]}
     heroCount = {heroCount}
     setHeroCount ={setHeroCount}
     playStatus={playStatus}
     setPlayStatus={setPlayStatus}

  />
  </>
  
  )
}

export default App
