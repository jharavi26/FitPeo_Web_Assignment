import React from 'react'
import Calendar from './Calendar'
import {calendarSlots} from "../data/calendarSlots";
import "../styles/RightPanel.css"
import Header from './Header';
import AppoinmentCard from './AppoinmentCard';
import {appointments} from "../data/appointments";

function RightPanel() {
  return (
    <div className='right'>
    <Header/>
    <h2>October</h2>
    <span>⇽⇾</span>
    <Calendar calendarSlots={calendarSlots} />
    <AppoinmentCard appoinmentCard = {appointments}/>
    </div>
  )
}

export default RightPanel
