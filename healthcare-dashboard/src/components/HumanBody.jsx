import React from 'react';
import Human from "../assets/Human-Anotomy.png"
import "../styles/HumanBody.css";
import {healthMetrics} from "../data/healthMetrics";
import HealthStatusCard from './HealthStatusCard';
import { ChevronDown } from 'lucide-react';

function HumanBody() {
  return (
    <div className='humanbody'>
      <div className='body-header'>
        <h1>Dashboard</h1>
        <p>This Week<ChevronDown size={12}/></p>
      </div>
      <div className='body-component'>
      <img src = {Human} alt = "Human Anatomy"></img> 
      <HealthStatusCard HealthMetrics = {healthMetrics}/>
      </div>
    </div>
  )
}

export default HumanBody
