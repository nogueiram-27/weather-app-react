import React from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";
import WeatherAdvice from "./WeatherAdvice";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      {" "}
      <div className="curr-weather">
        <div className="row">
          <div className="col-5">
            <WeatherInfo />
          </div>

          <div className="col-3">
            <WeatherDetails />
          </div>

          <div className="col-4">
            <WeatherAdvice />
          </div>
        </div>
      </div>
    </div>
  );
}
