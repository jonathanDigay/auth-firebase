import React from 'react'
import SideBar from "./sidebar"
import Body from "./body"

export default function Dashboard() {
  return (
    <div className="dashboard_main">
       <SideBar/>
       <Body/>
    </div>
  )
}
