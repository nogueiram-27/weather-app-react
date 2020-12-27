import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="clearfix">
        <i className="fas fa-sun curr-icon float-left" />
        <h3 className="curr-city-weather float-left">
          <strong className="temp-main">13</strong>
          <span className="unit-main">ºC</span>
        </h3>
      </div>
      <p className="curr-desc">Clear Sky</p>
      <p className="last-upd">
        Last updated: <span>14:15</span>
      </p>
    </div>
  );
}
