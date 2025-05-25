import React from 'react';
import "../styles/DashboardContent.css"
import HumanBody from './HumanBody';

import {appointments } from "../data/appointments";
import Calendar from './Calendar';
import AppoinmentCard from './AppoinmentCard';
import Header from './Header';

function DashboardContent() {
  return (
    <div className='container'>
    <div className='header3'>
    <Header/>
    <div className='component'>
    <HumanBody/>
    </div>
  </div>
  </div>
  )
}

export default DashboardContent
