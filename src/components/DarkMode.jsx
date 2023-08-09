import React, { useState } from "react";

const DarkMode = () => {
  const [transition, setTransition] = useState("");
  const [source, setSource] = useState(
    <img src="/images/light/icons/dark-mode.png" alt="dark mode icon" />
  );
  const [light, setLight] = useState("dark-mode-eye");
  function openEye() {
    setTransition("");
    source.props.src === "/images/light/icons/dark-mode.png"
      ? setSource(
          <img
            src="/images/dark/icons/light-mode.png"
            style={{ width: "0.8rem" }}
            alt="dark mode icon"
          />
        )
      : setSource(
          <img src="/images/light/icons/dark-mode.png" alt="dark mode icon" />
        );
    light === "dark-mode-eye"
      ? setLight("dark-mode-eye light-mode-eye")
      : setLight("dark-mode-eye");
  }
  return (
    <div
      className={light}
      onClick={() => {
        setTransition("close-eye");
        setTimeout(openEye, 350);
      }}
    >
      <div className="close">
        <span className={transition}></span>
      </div>
      <div className="dark-mode-circle">{source}</div>
    </div>
  );
};

export default DarkMode;
