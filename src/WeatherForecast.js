import React from "react";
//import axios from "axios";

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
          <div className="col-2">
            <p className="next-hour">15:00</p>
            <img className="pred-icon" alt="test" />
            <p className="pred-temp">
              <span className="temp-min">14</span>º/
              <span className="temp-max">15</span>º
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
