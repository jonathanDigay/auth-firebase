import React, {useContext,useState} from 'react'
import {AuthContext} from "../../userscontext/context"
import {useHistory} from "react-router-dom"
export default function Sidebar() {
  const {LogOut} =useContext(AuthContext)
  const [error,setError]=useState()
  const history =useHistory()
  const onLogOut=async(e)=>{
    e.preventDefault()

    try{
      await LogOut()
      setError("")
      history.push("/")
    }catch{
      setError("failed to logout")
    }

  }
  return (
    <div className="sidebar_main">
      <div className="users_profile">
        <div className="users_image">
          <img src="" alt="Users" />
        </div>
        <h1>Jonathan</h1>
        <p>{error}</p>
        <p>Jonathan.digay1@gmail.com</p>
        <button className="logoutBtn" onClick={onLogOut}>Log Out</button>
      </div>
    </div>
  )
}
