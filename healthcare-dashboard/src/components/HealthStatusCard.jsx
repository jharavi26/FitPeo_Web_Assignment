import React from 'react';
import "../styles/HealthStatusCard.css"

const iconMap = {
  lungs: "🫁",
  tooth: "🦷",
  bone: "🦴",
};

function HealthStatusCard({HealthMetrics}) {
  return (
    <div>
     {HealthMetrics.map((metric) => (
        <div key={metric.id} className="metric-card">
          <div className="metric-header">
            <span className="metric-icon">{iconMap[metric.icon]}</span>
             <h3>{metric.title}</h3>
          </div>
          <p>{metric.date}</p>
          <div className="progress-bar-container">
            <div className="progress-bar"
              style={{
                width: `${metric.progress}%`,
                backgroundColor: metric.color.replace("bg-", "").replace("-400", ""),
              }}
            ></div>
          </div>
        </div>
      ))}
      <p style={{marginLeft :"80%"}}>Details →</p>
    </div>
  );
}

export default HealthStatusCard
