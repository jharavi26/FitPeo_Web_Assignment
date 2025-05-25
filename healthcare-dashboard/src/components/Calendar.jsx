import React from 'react';
import "../styles/Calendar.css"


function Calendar({calendarSlots}) {
  return (
    <div className='calendar'>
      {
        calendarSlots.map((item)=>{
          return <div className='wrapper' key ={item.date}>
          <h3>{item.day}</h3>
          <span>{item.date}</span>
          {
            item.times.map((date, index)=>{
              return <div className='date' key={index}>{date}</div>
            })
          }
          </div>
        })
      }
    </div>
  )
}

export default Calendar
