import React from "react";
import DateHandler from "./DateHandler";
import IconHandler from "./IconHandler";
import ConvertToCelsius from "./ConvertToCelsius";
import ConvertToFahrenheit from "./ConvertToFahrenheit";

export default function WeatherForecastDetails(props) {
  console.log(props);
  return (
    <div className="col-2">
      <DateHandler dateType="forecast" epochTime={props.weatherInfo.nextDate} />

      <IconHandler iconType="forecast" currentIcon={props.weatherInfo.iconId} />
      <p className="pred-temp">
        <span className="temp-min">
          {props.weatherUnit === "metric" ? (
            <ConvertToCelsius
              temp={props.weatherInfo.tempMin}
              currentUnit={props.weatherInfo.weatherUnit}
            />
          ) : (
            <ConvertToFahrenheit
              temp={props.weatherInfo.tempMin}
              currentUnit={props.weatherInfo.weatherUnit}
            />
          )}
        </span>
        º/
        <span className="temp-max">
          {props.weatherUnit === "metric" ? (
            <ConvertToCelsius
              temp={props.weatherInfo.tempMax}
              currentUnit={props.weatherInfo.weatherUnit}
            />
          ) : (
            <ConvertToFahrenheit
              temp={props.weatherInfo.tempMax}
              currentUnit={props.weatherInfo.weatherUnit}
            />
          )}
        </span>
        º
      </p>
    </div>
  );
}
