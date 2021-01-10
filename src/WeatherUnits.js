import React, { useState } from "react";

import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("metric");

  function setUnitToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    props.handleChange("imperial");
  }

  function setUnitToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
    props.handleChange("metric");
  }

  if (unit === "metric") {
    return (
      <div className="WeatherUnits">
        <p className=" weather-unit">
          <span className="selected">ºC</span> |{" "}
          <a href="/" onClick={setUnitToFahrenheit}>
            ºF
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <p className=" weather-unit">
          <a href="/" onClick={setUnitToCelsius}>
            ºC
          </a>{" "}
          | <span className="selected">ºF</span>
        </p>
      </div>
    );
  }
}
