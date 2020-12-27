import React from "react";

import "./LocationAndDate.css";

export default function LocationAndDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function CurrentDate() {
    let currentDate = new Date();
    let currentDay = days[currentDate.getDay()];
    let currentHour = currentDate.getHours();
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let currentMinutes = currentDate.getMinutes();
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }

    return (
      <p className="today">
        {" "}
        {currentDay}, {currentHour}:{currentMinutes}
      </p>
    );
  }

  return (
    <div className="LocationAndDate">
      {" "}
      <div className="row location-and-date">
        <div className="col-12">
          <h3 className="city-searched">{props.weatherInfo.city}</h3>
          <CurrentDate />
        </div>
      </div>
    </div>
  );
}
