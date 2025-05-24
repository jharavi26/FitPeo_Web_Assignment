import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import "../styles/Dashboard.css"
import DashboardContent from '../components/DashboardContent'


function Dashboard() {
  return (
    <div className='container'>
    <div className='dashboard'>
      <Sidebar/>
      <Header/>
    </div>
    <DashboardContent/>
    </div>
  )
}

export default Dashboard
