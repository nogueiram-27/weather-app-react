import React from "react";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="search-form" id="search-city-weather">
        <input
          type="text"
          placeholder="Enter city name"
          className="form-control"
          id="input-city"
          autocomplete="off"
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
        <button className="location-button" id="curr-location">
          <i className="fas fa-map-marker-alt"></i>
          <span className="tooltiptext"> Weather in current location </span>
        </button>
      </form>
    </div>
  );
}
