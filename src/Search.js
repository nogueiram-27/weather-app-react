import React from "react";
import LocationAndDate from "./LocationAndDate";
import CurrentWeather from "./CurrentWeather";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      {" "}
      <div className="app-header">
        <div className="row">
          <div className="col-8">
            <div className="SearchForm">
              <form className="search-form">
                <input
                  type="text"
                  placeholder="Enter city name"
                  className="form-control"
                  autocomplete="off"
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
      <LocationAndDate />
      <CurrentWeather />
    </div>
  );
}
