import React from 'react'
import Calendar from './Calendar'
import {calendarSlots} from "../data/calendarSlots";
import "../styles/RightPanel.css"
import AppoinmentCard from './AppoinmentCard';
import {appointments} from "../data/appointments";
import Schedule from './Schedule';
import Profile from "../assets/Profile.png";
import Header from './Header';
import { CirclePlus } from 'lucide-react';

function RightPanel() {
  return (
    <div className='right'>
      <div className='right-header'>
        <div className='header-component'>
        <img src = {Profile} alt = "Profile-Image" className='avatar'></img>
        <button><CirclePlus size={20}/></button>
        </div>
        </div>
        <Calendar calendarSlots={calendarSlots}/>
        <AppoinmentCard appoinmentCard = {appointments}/>
        <Schedule/>
    </div>
  )
}

export default RightPanel
