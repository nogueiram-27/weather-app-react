import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

import LocationAndDate from "./LocationAndDate";
import CurrentWeather from "./CurrentWeather";

import "./Search.css";

export default function Search() {
  const apiKey = "db8ccdf98a00dd96ce6fde5b428abba4";
  const tempUnit = "metric";

  const [hasResponse, setHasResponse] = useState(false);
  const [inputCity, setInputCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});

  function getApiResponse(response) {
    setWeatherInfo({
      city: response.data.name,
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
    });

    setHasResponse(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=${tempUnit}&appid=${apiKey}`;
    axios.get(apiURL).then(getApiResponse);
  }

  function getInputCity(event) {
    setInputCity(event.target.value);
  }

  if (!hasResponse) {
    return (
      <div className="Search">
        <div className="app-header">
          <div className="row">
            <div className="col-8">
              <div className="SearchForm">
                <form className="search-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter city name"
                    className="form-control"
                    autoComplete="off"
                    onChange={getInputCity}
                  />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <button className="location-button">
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="tooltiptext">
                      {" "}
                      Weather in current location{" "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-4">
              <div className="WeatherUnit">
                <p className=" weather-unit convert-unit selected">ºC | ºF</p>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    );
  } else {
    return (
      <div className="Search">
        {" "}
        <div className="app-header">
          <div className="row">
            <div className="col-8">
              <div className="SearchForm">
                <form className="search-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter city name"
                    className="form-control"
                    autoComplete="off"
                    onChange={getInputCity}
                  />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <button className="location-button">
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="tooltiptext">
                      {" "}
                      Weather in current location{" "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-4">
              <div className="WeatherUnit">
                <p className=" weather-unit convert-unit selected">ºC | ºF</p>
              </div>
            </div>
          </div>
        </div>
        <LocationAndDate weatherInfo={weatherInfo} />
        <CurrentWeather weatherInfo={weatherInfo} />
      </div>
    );
  }
}
