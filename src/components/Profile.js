import React from 'react'
import SideBar from "./Profile/sidebar"
import Body from "./Profile/body"

export default function Dashboard() {
  return (
    <div className="dashboard_main">
       <SideBar/>
       <Body/>
    </div>
  )
}
