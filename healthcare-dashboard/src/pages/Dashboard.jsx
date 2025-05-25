import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import "../styles/Dashboard.css"
import DashboardContent from '../components/DashboardContent'
import RightPanel from '../components/RightPanel'


function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <DashboardContent/>
      <RightPanel/>
    </div>
  )
}

export default Dashboard
