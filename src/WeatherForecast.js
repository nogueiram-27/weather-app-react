import React from "react";
import WeatherForecastDetails from "./WeatherForecastDetails";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log("weatherPred: ", props.weatherInfo);
  return (
    <div className="WeatherForecast">
      {" "}
      <div className="row">
        <div className="line-col col-12">
          <hr />
        </div>
      </div>
      <div className="next-days">
        <div className="row">
          {props.weatherInfo.map(function (item) {
            return (
              <WeatherForecastDetails
                weatherInfo={item}
                weatherUnit={props.weatherUnit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
