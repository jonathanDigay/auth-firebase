import React from 'react'
import VDBG from "./assets/vdbg.mp4"

// home components
import NavBar from "./home/NavBar"
import Hero from "./home/Hero"

export default function Home() {
  return (
    <div className="home_container">
      <video autoPlay loop muted className="vdbg">
        <source  src={VDBG} />
      </video>
        <NavBar/>
        <Hero/>
    </div>
  )
}
