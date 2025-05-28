import React from "react";
import { activityChart } from "../data/activityChart";
import "../styles/ActivityChart.css";


function ActivityChart() {
   return (
    <div className="activity-chart-container">
      <div className="activity-chart-header">
        <h4>Activity</h4>
        <span>3 appointments on this week</span>
      </div>
      <div className="activity-chart">
        {activityChart.map((dayItem, index) => (
          <div className="day-column" key={index}>
            <div className="bar-group">
              {dayItem.bars.map((bar, idx) =>
                bar.isSplit ? (
                  <div className="bar-split" key={idx}>
                    <div
                      className="split-top"
                      style={{ height: `${bar.heightTop}px`, backgroundColor: bar.color }}
                    ></div>
                    <div
                      className="split-bottom"
                      style={{ height: `${bar.heightBottom}px`, backgroundColor: bar.color }}
                    ></div>
                  </div>
                ) : (
                  <div
                    className="bar"
                    key={idx}
                    style={{ height: `${bar.height}px`, backgroundColor: bar.color }}
                  ></div>
                )
              )}
            </div>
            <div className="day-label">{dayItem.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;