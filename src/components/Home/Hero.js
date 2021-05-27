import React from 'react'
import {Link} from "react-router-dom"
export default function Hero() {
  return (
    <div className="hero_main">
      <div className="hero_container">
        <h1> Firebase Authentication</h1>
        <p>With Digay</p>
        <button><Link to="/signup"> Get Started</Link></button>
      </div>
    </div>
  )
}
