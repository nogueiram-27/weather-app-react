import React, { useState } from "react";

import Form from "./Form";
import WeatherUnits from "./WeatherUnits";
import ApiResponseHandler from "./ApiResponseHandler";

import "./Search.css";

export default function Search() {
  const [tempUnit, setTempUnit] = useState("metric");
  const [inputCity, setInputCity] = useState("Lisbon");

  function handleSubmit(value) {
    console.log("value: ", value);
    setInputCity(value);
  }

  function handleChange(value) {
    setTempUnit(value);
  }

  return (
    <div className="Search">
      {" "}
      <div className="app-header">
        <div className="row">
          <div className="col-8">
            <Form onSubmit={handleSubmit} />
          </div>
          <div className="col-4">
            <WeatherUnits handleChange={handleChange} />
          </div>
        </div>
      </div>
      <ApiResponseHandler city={inputCity} unit={tempUnit} />
    </div>
  );
}
