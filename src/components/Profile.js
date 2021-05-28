import React from 'react'
import SideBar from "./usersprofile/sidebar"
import Body from "./usersprofile/body"

export default function Dashboard() {
  return (
    <div className="dashboard_main">
       <SideBar/>
       <Body/>
    </div>
  )
}
