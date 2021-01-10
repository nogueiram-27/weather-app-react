import React from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";
import WeatherAdvice from "./WeatherAdvice";

export default function CurrentWeather(props) {
  let weatherUnit = props.weatherUnit;
  console.log("weatherUnit in CurrentWeather component: ", weatherUnit);
  let weatherInfo = props.weatherInfo;

  return (
    <div className="CurrentWeather">
      {" "}
      <div className="curr-weather">
        <div className="row">
          <div className="col-5">
            <WeatherInfo weatherInfo={weatherInfo} weatherUnit={weatherUnit} />
          </div>

          <div className="col-3">
            <WeatherDetails
              weatherInfo={weatherInfo}
              weatherUnit={weatherUnit}
            />
          </div>

          <div className="col-4">
            <WeatherAdvice weatherInfo={weatherInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
