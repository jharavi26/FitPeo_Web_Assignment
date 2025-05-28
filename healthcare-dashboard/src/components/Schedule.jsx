import React from 'react'
import UpcomingScheduleCard from './UpcomingScheduleCard';
import {schedule} from "../data/schedule";


function Schedule() {
  return (
    <div className='schedule'>
      <UpcomingScheduleCard Scheduledata = {schedule} />
      
    </div>
  )
}

export default Schedule
