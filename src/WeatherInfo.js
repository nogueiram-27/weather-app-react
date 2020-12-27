import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const iconUrl = `http://openweathermap.org/img/wn/${props.weatherInfo.currentIcon}@2x.png`;

  function EpochToDateTime() {
    const epochTime = props.weatherInfo.lastUpd;

    let dateTime = new Date(epochTime);
    let dateTimeHour = dateTime.getHours();
    if (dateTimeHour < 10) {
      dateTimeHour = `0${dateTimeHour}`;
    }
    let dateTimeMinutes = dateTime.getMinutes();
    if (dateTimeMinutes < 10) {
      dateTimeMinutes = `0${dateTimeMinutes}`;
    }

    return (
      <p className="last-upd">
        Last updated:{" "}
        <span>
          {dateTimeHour}:{dateTimeMinutes}
        </span>
      </p>
    );
  }

  return (
    <div className="WeatherInfo">
      {" "}
      <div className="clearfix">
        <img
          className="curr-icon float-left"
          src={iconUrl}
          alt={props.weatherInfo.currentDescription}
        />

        <h3 className="curr-city-weather float-left">
          <strong className="temp-main">
            {Math.round(props.weatherInfo.currentTemp)}
          </strong>
          <span className="unit-main">ºC</span>
        </h3>
      </div>
      <p className="curr-desc">{props.weatherInfo.currentDescription}</p>
      <EpochToDateTime />
    </div>
  );
}
