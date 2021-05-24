import React from 'react'
import {UseForm} from "./useform"

function Header() {
  const {handleOnLogOut}=UseForm()
  return (
    <div className="header_container">
       <h3>DigayAuth</h3>
       <button onClick ={handleOnLogOut}>Log Out</button>
    </div>
  )
}

export default Header

