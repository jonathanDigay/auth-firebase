import React from 'react'
import {Link} from "react-router-dom" 
export default function NavBar() {

  return (
    <div className="navbar">
        <h3><span>D</span>igay<span>M</span>edia</h3>
        <ul>
          <Link to="/signin" className="menu"><li >Sign in</li></Link>
         <Link to="/signup" className="menu"><li >Regester</li></Link>
        </ul>
    </div>
  )
}
