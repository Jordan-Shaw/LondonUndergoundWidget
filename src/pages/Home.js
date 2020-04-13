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
        <div className="homeSubheading">
          <h2 className="subheadingText">Helping you check the status of the London Underground lines</h2>
        </div>
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
