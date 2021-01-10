import React from "react";
import IconHandler from "./IconHandler";

import "./WeatherAdvice.css";

export default function WeatherAdvice(props) {
  return (
    <div className="WeatherAdvice">
      {" "}
      <IconHandler
        iconType="advice"
        currentIcon={props.weatherInfo.currentIcon}
        currentDescription={props.weatherInfo.currentDescription}
      />
    </div>
  );
}
