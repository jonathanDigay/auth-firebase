import React from 'react'
import SideBar from "./UsersProfile/sidebar"
import Body from "./UsersProfile/body"

export default function Dashboard() {
  return (
    <div className="dashboard_main">
       <SideBar/>
       <Body/>
    </div>
  )
}
