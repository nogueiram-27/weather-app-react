import React from "react";
import Header from "./Header";
import LocationAndDate from "./LocationAndDate";
import CurrentWeather from "./CurrentWeather";
import "./App.css";

export default function App() {
  return (
    <div className="App weather-app">
      <Header />
      <LocationAndDate />
      <CurrentWeather />
    </div>
  );
}
