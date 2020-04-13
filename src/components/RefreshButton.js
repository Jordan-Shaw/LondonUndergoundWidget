import React from "react";
import anime from "animejs/lib/anime.es.js";

export default function RefreshButton(props) {
  const { setLoading } = props;

  return (
    <button
      id="refreshButton"
      onClick={() => {
        anime({
          targets: [".singleLineContentContainer"],
          easing: "easeInOutQuad",
          duration: 1000,
          opacity: 0,
        });
        setTimeout(() => {
          setLoading(true);
        }, 1500);
      }}
    >
      Refresh
    </button>
  );
}

