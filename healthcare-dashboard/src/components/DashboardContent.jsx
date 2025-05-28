import React from 'react';
import "../styles/DashboardContent.css"
import HumanBody from './HumanBody';
import Header from './Header';
import ActivityChart from './ActivityChart';

function DashboardContent() {
  return (
    <div className='main'>
    <div className='main-header'>
    <Header/>
    <div className='main-component'>
    <HumanBody/>
    <ActivityChart/>
    </div>
    </div>
  </div>
  )
}

export default DashboardContent
