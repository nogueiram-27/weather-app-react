import React from "react";

import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      {" "}
      <div className="curr-info">
        <p>
          Feels like: <span id="feels-like">12</span>º
        </p>
        <p>
          <span id="curr-temp-min">12</span>º /
          <span id="curr-temp-max">14</span>º
        </p>
        <p>
          <i className="fas fa-tint"></i>
          <span id="curr-humidity">87</span>%
        </p>
        <p>
          <i className="fas fa-wind"></i>
          <span id="curr-wind-speed">8</span> km/h
        </p>
        <p>
          <i className="fas fa-umbrella"></i>
          <span id="curr-precipitation">0</span>mm
        </p>
      </div>
    </div>
  );
}
