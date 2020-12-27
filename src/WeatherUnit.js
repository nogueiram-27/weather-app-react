import React from "react";

import "./WeatherUnit.css";

export default function WeatherUnit() {
  return (
    <div className="WeatherUnit">
      <p className="weather-unit">
        <a className="convert-unit selected" href="#" id="convert-celsius">
          ºC
        </a>
        |
        <a className="convert-unit" href="#" id="convert-fahrenheit">
          ºF
        </a>
      </p>
    </div>
  );
}
