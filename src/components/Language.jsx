import React, { useState } from "react";

const Language = () => {
  const [hiddenPart, setHiddenPart] = useState("hidden language-list");
  return (
    <div
      className="language"
      onMouseEnter={() => {
        setHiddenPart("language-list");
      }}
      onMouseLeave={() => {
        setHiddenPart("hidden language-list");
      }}
    >
      <span>Language</span>
      <div className={hiddenPart}>
        <div className="language-section">
          <img
            src="/images/light/icons/azerbaijan-flag.png"
            width="25px"
            alt="Azerbaijan flag"
          />
          <span>Azərbaycan</span>
        </div>
        <div className="language-section">
          <img
            src="/images/light/icons/english-flag.png"
            width="25px"
            alt="English flag"
          />
          <span>English</span>
        </div>
      </div>
    </div>
  );
};

export default Language;
