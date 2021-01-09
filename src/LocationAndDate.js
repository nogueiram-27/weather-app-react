import React from "react";
import DateHandler from "./DateHandler";

import "./LocationAndDate.css";

export default function LocationAndDate(props) {
  return (
    <div className="LocationAndDate">
      {" "}
      <div className="row location-and-date">
        <div className="col-12">
          <h3 className="city-searched">{props.weatherInfo.city}</h3>
          <DateHandler dateType="current" />
        </div>
      </div>
    </div>
  );
}
