import React from "react";

import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  function convertMetroPerSecondToKilometerPerHour(metroPerSecond) {
    return Math.round(metroPerSecond * 3.6);
  }

  return (
    <div className="WeatherDetails">
      {" "}
      <div className="curr-info">
        <p>
          Feels like:{" "}
          <span>{Math.round(props.weatherInfo.currentFeelsLike)}</span>º
        </p>
        <p>
          <span>{Math.round(props.weatherInfo.currentMinTemp)}</span>º /
          <span>{Math.round(props.weatherInfo.currentMaxTemp)}</span>º
        </p>
        <p>
          <i className="fas fa-tint"></i>
          <span>{props.weatherInfo.currentHumidity}</span>%
        </p>
        <p>
          <i className="fas fa-wind"></i>
          <span>
            {convertMetroPerSecondToKilometerPerHour(
              props.weatherInfo.currentWind
            )}
          </span>{" "}
          km/h
        </p>
        <p>
          <i className="fas fa-umbrella"></i>
          <span>{props.weatherInfo.currentPrecipitation}</span>mm
        </p>
      </div>
    </div>
  );
}
