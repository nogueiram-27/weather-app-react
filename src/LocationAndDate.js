import React from "react";

import "./LocationAndDate.css";

export default function LocationAndDate() {
  return (
    <div className="LocationAndDate">
      {" "}
      <div className="row location-and-date">
        <div className="col-12">
          <h3 className="city-searched">Lisboa</h3>
          <p className="today">Sunday, 14:28</p>
        </div>
      </div>
    </div>
  );
}
