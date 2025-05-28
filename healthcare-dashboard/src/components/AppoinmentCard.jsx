import React from 'react';
import "../styles/AppointmentCard.css";

function AppoinmentCard({appoinmentCard}) {
  return (
    <div className='appoinmentCard'>
      {
        appoinmentCard.map((data , index)=>{
          return <div className='card' key={index}>
          <div className='header4'>
          <span>{data.type}</span>
          <span>{data.icon}</span>
          </div>
          <p>{data.time}</p>
          <p>{data.doctor}</p>
         </div>
        })
      } 
    </div>
  )
}

export default AppoinmentCard
