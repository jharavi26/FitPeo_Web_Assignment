import React from "react";
import "../styles/Calendar.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Calendar({ calendarSlots }) {
  return (
    <div className="calendar-component">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calendar-nav">
          <ArrowLeft size={18} />
          <ArrowRight size={18} />
        </div>
      </div>
      <div className="calendar">
      {calendarSlots.map((item ,index) => {
        return (
          <div className = {`calendar-component ${item.highlight ? "highlight" : ""}
            ${item.disabled ? "disabled" : ""}`} key={item.date}>
            <h3>{item.day}</h3>
            <span className="calendar-date">{item.date}</span>
            <div className="calendar-times">
            {item.times.map((time, index) => {
              return (
                <div className = { `calendar-time ${item.active === index ? " active" : ""}
                  ${item.booked === index ? " booked" : ""} `} key={index}>
                  {time}
                </div>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Calendar;
