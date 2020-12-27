import React from "react";

import "./SearchForm.css";

export default function SearchForm() {
  return (
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
          <span className="tooltiptext"> Weather in current location </span>
        </button>
      </form>
    </div>
  );
}
