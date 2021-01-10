import React, { useState } from "react";

import "./Form.css";

export default function Form(props) {
  const [inputCity, setInputCity] = useState("");

  function getInputCity(event) {
    setInputCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(inputCity);
  }

  return (
    <div className="Form">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          className="form-control"
          autoComplete="off"
          onChange={getInputCity}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
