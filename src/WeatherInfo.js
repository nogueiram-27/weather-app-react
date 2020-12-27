import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="clearfix">
        <i className="fas fa-sun curr-icon float-left" id="curr-weather-icon" />
        <h3 className="curr-city-weather float-left">
          <strong className="temp-main" id="curr-temp">
            13
          </strong>
          <span className="unit-main" id="curr-temp-unit">
            ºC
          </span>
        </h3>
      </div>
      <p className="curr-desc" id="curr-weather-desc">
        Clear Sky
      </p>
      <p className="last-upd">
        Last updated: <span id="last-upd">14:15</span>
      </p>
    </div>
  );
}
