import React from "react";

import "./WeatherAdvice.css";

export default function WeatherAdvice(props) {
  const adviceObject = {
    "01d": {
      "activity-description": "It's outside weather...maybe icecream?",
      "fa-icon": "fa-ice-cream",
    },

    "01n": {
      "activity-description": "Perfect for watch the stars!",
      "fa-icon": "fa-star",
    },

    "02d": {
      "activity-description": "It's outside weather...maybe a hot coffee?",
      "fa-icon": "fa-mug-hot",
    },

    "02n": {
      "activity-description": "Definitely dinnner with friends!",
      "fa-icon": "fa-glass-cheers",
    },

    "03d": {
      "activity-description": "Comeback summer!!!",
      "fa-icon": "fa-sad-tear",
    },

    "03n": {
      "activity-description": "Have we reached winter time yet?",
      "fa-icon": "fa-flushed",
    },

    "04d": {
      "activity-description": "Better return home to grab your umbrella.",
      "fa-icon": "fa-umbrella",
    },

    "04n": {
      "activity-description": "Ok, no more excuses to read that book!",
      "fa-icon": "fa-book-reader",
    },

    "09d": {
      "activity-description": "Just 5 more minutes in bed, please!",
      "fa-icon": "fa-bed",
    },

    "09n": {
      "activity-description": "Hot chocolate weather!",
      "fa-icon": "fa-mug-hot",
    },

    "10d": {
      "activity-description": "Love the smell of the rain!",
      "fa-icon": "fa-heart",
    },

    "10n": {
      "activity-description": "Ready for a cozy night!",
      "fa-icon": "fa-couch",
    },

    "11d": {
      "activity-description": "Is it ok to call sick?",
      "fa-icon": "fa-temperature-high",
    },

    "11n": {
      "activity-description": "Movie night!",
      "fa-icon": "fa-film",
    },

    "13d": {
      "activity-description": "Snowman time!",
      "fa-icon": "fa-snowman",
    },

    "13n": {
      "activity-description": "Snowman time!",
      "fa-icon": "fa-snowman",
    },

    "50d": {
      "activity-description": "Stay inside weather",
      "fa-icon": "fa-house-user",
    },

    "50n": {
      "activity-description": "Stay inside weather",
      "fa-icon": "fa-house-user",
    },
  };

  return (
    <div className="WeatherAdvice">
      {" "}
      <div className="weather-advice-wrapper">
        <div className="weather-advice">
          <p>
            {
              adviceObject[props.weatherInfo.currentIcon][
                "activity-description"
              ]
            }
          </p>
        </div>
        <div className="weather-advice-icon">
          <i
            className={`fas ${
              adviceObject[props.weatherInfo.currentIcon][`fa-icon`]
            }`}
          ></i>
        </div>
      </div>
    </div>
  );
}
