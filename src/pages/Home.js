import React, { useEffect } from "react";
import logo from "../logo.svg";
import { useNavigate } from "@reach/router";
import anime from "animejs/lib/anime.es.js";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let timeline = anime.timeline({
      easing: "linear",
      duration: 1000,
    });
    timeline.add({
      targets: ".homeBackground",
      opacity: 0.75,
    });
    timeline.add({
      targets: ".logo",
      translateY: 5,
      opacity: 1,
    });
    timeline.add({
      targets: ".homeSubheading",
      translateY: 5,
      opacity: 1
    });
    timeline.add({
      targets: "#homeNavigateButton",
      translateY: 5,
      opacity: 1,
    });
  }, []);

  return (
    <div className="homePage">
      <div className="homeBackground"></div>

      <div className="homeContentContainer">
        <img src={logo} className="logo" alt="Widget Logo" id="homeLogo" />
        <div className="homeSubheading">
          <h2 className="subheadingText">
            Helping you check the status of the London Underground lines
          </h2>
        </div>
        <button
          id="homeNavigateButton"
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
