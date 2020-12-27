import React from "react";

import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      {" "}
      <div className="curr-info">
        <p>
          Feels like: <span>12</span>º
        </p>
        <p>
          <span>12</span>º /<span>14</span>º
        </p>
        <p>
          <i className="fas fa-tint"></i>
          <span>87</span>%
        </p>
        <p>
          <i className="fas fa-wind"></i>
          <span>8</span> km/h
        </p>
        <p>
          <i className="fas fa-umbrella"></i>
          <span>0</span>mm
        </p>
      </div>
    </div>
  );
}
