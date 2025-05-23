import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import HumanBody from '../components/HumanBody'
import HealthStatusCard from '../components/HealthStatusCard'
import Calendar from '../components/Calendar'
import Schedule from '../components/Schedule'
import AppoinmentCard from '../components/AppoinmentCard'
import ActivityChart from '../components/ActivityChart'

function Dashboard() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <HumanBody/>
      <HealthStatusCard/>
      <Calendar/>
      <Schedule/>
      <AppoinmentCard/>
      <ActivityChart/>

    </div>
  )
}

export default Dashboard
