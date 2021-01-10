import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

import LocationAndDate from "./LocationAndDate";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function ApiResponseHandler(props) {
  const apiKey = "db8ccdf98a00dd96ce6fde5b428abba4";
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });
  const [weatherPred, setWeatherPred] = useState([{}]);

  function getApiResponse(response) {
    console.log(response);

    setWeatherInfo({
      city: props.city,
      currentTemp: response.data.main.temp,
      currentMaxTemp: response.data.main.temp_max,
      currentMinTemp: response.data.main.temp_min,
      currentFeelsLike: response.data.main.feels_like,
      currentWind: response.data.wind.speed,
      currentHumidity: response.data.main.humidity,
      currentPrecipitation:
        typeof currentPrecipitation != "undefined"
          ? response.data.rain["1h"]
          : "0",
      currentIcon: response.data.weather[0].icon,
      currentDescription: response.data.weather[0].description,
      lastUpd: response.data.dt * 1000,
      weatherUnit: props.unit,
      loaded: true,
    });
  }

  function getPredApiResonse(response) {
    const objectAux = [];

    response.data.list.slice(0, 6).forEach((element) => {
      objectAux.push({
        nextDate: element.dt * 1000,
        tempMin: element.main.temp_min,
        tempMax: element.main.temp_max,
        iconId: element.weather[0].icon,
        description: element.weather[0].description,
        weatherUnit: props.unit,
      });
    });

    setWeatherPred(objectAux);
  }

  function callApi() {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${props.unit}&appid=${apiKey}`;
    axios.get(apiURL).then(getApiResponse);
  }

  function callForecastApi() {
    let predApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${props.unit}&appid=${apiKey}`;
    axios.get(predApiUrl).then(getPredApiResonse);
  }

  if (props.city === weatherInfo.city) {
    return (
      <div className="ApiResponseHandler">
        <LocationAndDate weatherInfo={weatherInfo} />
        <CurrentWeather weatherInfo={weatherInfo} weatherUnit={props.unit} />
        <WeatherForecast weatherInfo={weatherPred} weatherUnit={props.unit} />
      </div>
    );
  } else {
    callApi();
    callForecastApi();
    return (
      <div className="loader">
        {" "}
        <PropagateLoader
          css={css`
            position: relative;
            margin: 50px auto;
            left: 50%;
          `}
          loading={true}
          color={"#03c4a1"}
        />
      </div>
    );
  }
}
