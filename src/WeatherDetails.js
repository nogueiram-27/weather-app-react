import React from "react";
import ConvertToCelsius from "./ConvertToCelsius";
import ConvertToFahrenheit from "./ConvertToFahrenheit";

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
          <span>
            {" "}
            {props.weatherUnit === "metric" ? (
              <ConvertToCelsius
                temp={props.weatherInfo.currentFeelsLike}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            ) : (
              <ConvertToFahrenheit
                temp={props.weatherInfo.currentFeelsLike}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            )}
          </span>
          º
        </p>
        <p>
          <span>
            {" "}
            {props.weatherUnit === "metric" ? (
              <ConvertToCelsius
                temp={props.weatherInfo.currentMinTemp}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            ) : (
              <ConvertToFahrenheit
                temp={props.weatherInfo.currentMinTemp}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            )}
          </span>
          º /
          <span>
            {" "}
            {props.weatherUnit === "metric" ? (
              <ConvertToCelsius
                temp={props.weatherInfo.currentMaxTemp}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            ) : (
              <ConvertToFahrenheit
                temp={props.weatherInfo.currentMaxTemp}
                currentUnit={props.weatherInfo.weatherUnit}
              />
            )}
          </span>
          º
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
