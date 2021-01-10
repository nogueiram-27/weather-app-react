import React from "react";
import DateHandler from "./DateHandler";
import ConvertToCelsius from "./ConvertToCelsius";
import ConvertToFahrenheit from "./ConvertToFahrenheit";
import IconHandler from "./IconHandler";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="clearfix">
        <IconHandler
          iconType="current"
          currentIcon={props.weatherInfo.currentIcon}
          currentDescription={props.weatherInfo.currentDescription}
        />
        <h3 className="curr-city-weather float-left">
          <strong className="temp-main">
            {props.weatherUnit === "metric" ? (
              <ConvertToCelsius
                temp={props.weatherInfo.currentTemp}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            ) : (
              <ConvertToFahrenheit
                temp={props.weatherInfo.currentTemp}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            )}
          </strong>
          <span className="unit-main">
            {" "}
            {props.weatherUnit === "metric" ? "ºC" : "ºF"}
          </span>
        </h3>
      </div>
      <p className="curr-desc">{props.weatherInfo.currentDescription}</p>
      <DateHandler dateType="last-upd" epochTime={props.weatherInfo.lastUpd} />
    </div>
  );
}
