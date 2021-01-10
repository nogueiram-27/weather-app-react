import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

import SunnyDay from "./img/icons-svg/sunny.svg";
import SunnyNight from "./img/icons-svg/nt_sunny.svg";
import Storm from "./img/icons-svg/tstorms.svg";
import Rain from "./img/icons-svg/rain.svg";
import PartlyCloudyDay from "./img/icons-svg/partlycloudy.svg";
import PartlyCloudyNight from "./img/icons-svg/nt_partlycloudy.svg";
import Cloudy from "./img/icons-svg/cloudy.svg";
import Snow from "./img/icons-svg/snow.svg";
import Fog from "./img/icons-svg/fog.svg";

export default function IconHandler(props) {
  const iconObject = {
    "01d": {
      "current-weather-icon": SunnyDay,
      "pred-weather-icon": "CLEAR_DAY",
      "activity-description": "It's outside weather...maybe icecream?",
      "fa-icon": "fa-ice-cream",
    },

    "01n": {
      "current-weather-icon": SunnyNight,
      "pred-weather-icon": "CLEAR_NIGHT",
      "activity-description": "Perfect for watch the stars!",
      "fa-icon": "fa-star",
    },

    "02d": {
      "current-weather-icon": PartlyCloudyDay,
      "pred-weather-icon": "PARTLY_CLOUDY_DAY",
      "activity-description": "It's outside weather...maybe a hot coffee?",
      "fa-icon": "fa-mug-hot",
    },

    "02n": {
      "current-weather-icon": PartlyCloudyNight,
      "pred-weather-icon": "PARTLY_CLOUDY_NIGHT",
      "activity-description": "Definitely dinnner with friends!",
      "fa-icon": "fa-glass-cheers",
    },

    "03d": {
      "current-weather-icon": Cloudy,
      "pred-weather-icon": "CLOUDY",
      "activity-description": "Comeback summer!!!",
      "fa-icon": "fa-sad-tear",
    },

    "03n": {
      "current-weather-icon": Cloudy,
      "pred-weather-icon": "CLOUDY",
      "activity-description": "Have we reached winter time yet?",
      "fa-icon": "fa-flushed",
    },

    "04d": {
      "current-weather-icon": Cloudy,
      "pred-weather-icon": "CLOUDY",
      "activity-description": "Better return home to grab your umbrella.",
      "fa-icon": "fa-umbrella",
    },

    "04n": {
      "current-weather-icon": Cloudy,
      "pred-weather-icon": "CLOUDY",
      "activity-description": "Ok, no more excuses to read that book!",
      "fa-icon": "fa-book-reader",
    },

    "09d": {
      "current-weather-icon": Rain,
      "pred-weather-icon": "RAIN",
      "activity-description": "Just 5 more minutes in bed, please!",
      "fa-icon": "fa-bed",
    },

    "09n": {
      "current-weather-icon": Rain,
      "pred-weather-icon": "RAIN",
      "activity-description": "Hot chocolate weather!",
      "fa-icon": "fa-mug-hot",
    },

    "10d": {
      "current-weather-icon": Rain,
      "pred-weather-icon": "RAIN",
      "activity-description": "Love the smell of the rain!",
      "fa-icon": "fa-heart",
    },

    "10n": {
      "current-weather-icon": Rain,
      "pred-weather-icon": "RAIN",
      "activity-description": "Ready for a cozy night!",
      "fa-icon": "fa-couch",
    },

    "11d": {
      "current-weather-icon": Storm,
      "pred-weather-icon": "SLEET",
      "activity-description": "Is it ok to call sick?",
      "fa-icon": "fa-temperature-high",
    },

    "11n": {
      "current-weather-icon": Storm,
      "pred-weather-icon": "SLEET",
      "activity-description": "Movie night!",
      "fa-icon": "fa-film",
    },

    "13d": {
      "current-weather-icon": Snow,
      "pred-weather-icon": "SNOW",
      "activity-description": "Snowman time!",
      "fa-icon": "fa-snowman",
    },

    "13n": {
      "current-weather-icon": Snow,
      "pred-weather-icon": "SNOW",
      "activity-description": "Snowman time!",
      "fa-icon": "fa-snowman",
    },

    "50d": {
      "current-weather-icon": Fog,
      "pred-weather-icon": "FOG",
      "activity-description": "Stay inside weather",
      "fa-icon": "fa-house-user",
    },

    "50n": {
      "current-weather-icon": Fog,
      "pred-weather-icon": "FOG",
      "activity-description": "Stay inside weather",
      "fa-icon": "fa-house-user",
    },
  };

  //console.log(iconObject[props.currentIcon]["pred-weather-icon"]);

  if (props.iconType === "current") {
    return (
      <div>
        <img
          className="curr-icon float-left"
          src={iconObject[props.currentIcon]["current-weather-icon"]}
          alt={props.currentDescription}
        />
      </div>
    );
  } else {
    if (props.iconType === "forecast") {
      if (iconObject[props.currentIcon]) {
        return (
          <ReactAnimatedWeather
            className="pred-icon"
            icon={iconObject[props.currentIcon]["pred-weather-icon"]}
            color={"#03c4a1"}
            size={45}
            animate={true}
          />
        );
      } else {
        return (
          <ReactAnimatedWeather
            className="pred-icon"
            icon={"SUNNY"}
            color={"#03c4a1"}
            size={45}
            animate={true}
          />
        );
      }
    } else {
      return (
        <div className="weather-advice-wrapper">
          <div className="weather-advice">
            <p>{iconObject[props.currentIcon]["activity-description"]}</p>
          </div>
          <div className="weather-advice-icon">
            <i
              className={`fas ${iconObject[props.currentIcon][`fa-icon`]}`}
            ></i>
          </div>
        </div>
      );
    }
  }
}
