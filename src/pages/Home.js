import React from "react";
import logo from "../logo.svg";
import { useNavigate } from "@reach/router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="homePage">
      <div className="homeBackground"></div>

      <div className="homeContentContainer">
        <img src={logo} className="logo" alt="Widget Logo" />
        <h2 className="homeSubheading">
          Helping you get where you need to go...
        </h2>
        <button
          className="navigateButton"
          onClick={() => {
            navigate("/travel");
          }}
        >
          ENTER
        </button>
      </div>
    </div>
  );
}
