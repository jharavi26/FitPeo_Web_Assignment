import React from 'react';
import "../styles/UpcomingScheduleCard.css";

function UpcomingScheduleCard({Scheduledata}) {
  return (
    <div className='schedule'> 
     <h2>The Upcoming Schedule</h2>
      <p>On Thursday</p>
    <div className='scheduleCard'>
      {
        Scheduledata.slice(0,2).map((data)=>{
          return <div className='card' key = {data.name}>
          <div className='header4'>
          <span>{data.name}</span>
          <span>{data.icon}</span>
          </div>
          <p>{data.time}</p>
         </div>
        })
      }
    </div>
    <p>On Saturday</p>
    <div className='scheduleCard'>
      {
        Scheduledata.slice(2).map((data)=>{
          return <div className='card' key = {data.name}>
          <div className='header4'>
          <span>{data.name}</span>
          <span>{data.icon}</span>
          </div>
          <p>{data.time}</p>
         </div>
        })
      }
    </div>
    </div>
  )
}

export default UpcomingScheduleCard;
