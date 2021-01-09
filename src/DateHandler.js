import React from "react";

export default function DateHandler(props) {
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

  function EpochToDateTime() {
    let dateTime = new Date(props.epochTime);
    let dateTimeHour = dateTime.getHours();
    if (dateTimeHour < 10) {
      dateTimeHour = `0${dateTimeHour}`;
    }
    let dateTimeMinutes = dateTime.getMinutes();
    if (dateTimeMinutes < 10) {
      dateTimeMinutes = `0${dateTimeMinutes}`;
    }

    return (
      <p className="last-upd">
        Last updated:{" "}
        <span>
          {dateTimeHour}:{dateTimeMinutes}
        </span>
      </p>
    );
  }

  return props.dateType === "current" ? <CurrentDate /> : <EpochToDateTime />;
}
