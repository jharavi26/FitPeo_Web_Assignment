import React from 'react';
import Human from "../assets/Human-Anotomy.png"
import "../styles/HumanBody.css";
import {healthMetrics} from "../data/healthMetrics";
import HealthStatusCard from './HealthStatusCard';

function HumanBody() {
  return (
    <div className='humanbody'>
      <div className='header2'>
        <h1>Dashboard</h1>
        <p>This Week▿</p>
      </div>
      <div className='component'>
      <img src = {Human} alt = "Human Anatomy"></img> 
      <HealthStatusCard HealthMetrics = {healthMetrics}/>
      </div>
    </div>
  )
}

export default HumanBody
