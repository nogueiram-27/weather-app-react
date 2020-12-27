import React from "react";

import "./WeatherAdvice.css";

export default function WeatherAdvice() {
  return (
    <div className="WeatherAdvice">
      {" "}
      <div className="weather-advice-wrapper">
        <div className="weather-advice">
          <p>Comeback Summer !!</p>
        </div>
        <div className="weather-advice-icon">
          <i className="fas fa-sad-tear"></i>
        </div>
      </div>
    </div>
  );
}
