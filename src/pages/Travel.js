import React from "react";
import logo from "../logo.svg";
import LineList from "../components/LineList";

export default function Travel() {
  return (
    <div className="travelPage">
      <div className="travelHeader">
        <div className="headerBackground"></div>
        <img src={logo} alt="Widget Logo" className="logo" />
      </div>
      <div className="contentContainer">
        <p>Last updated:</p>
        <LineList/>
      </div>
    </div>
  );
}
