import React from "react";
import SearchForm from "./SearchForm";
import WeatherUnit from "./WeatherUnit";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      {" "}
      <div className="app-header">
        <div className="row">
          <div className="col-8">
            <SearchForm />
          </div>
          <div className="col-4">
            <WeatherUnit />
          </div>
        </div>
      </div>
    </div>
  );
}
