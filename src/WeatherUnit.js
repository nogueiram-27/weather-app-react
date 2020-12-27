import React from "react";

import "./WeatherUnit.css";

export default function WeatherUnit() {
  return (
    <div className="WeatherUnit">
      <p className=" weather-unit convert-unit selected">ºC | ºF</p>
    </div>
  );
}
