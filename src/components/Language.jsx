import React, { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../App";
import langData from "../languageData";
import { useEffect } from "react";

const Language = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language]);

  useEffect(() => {
    setData(langData[language]);
  }, [language]);

  return (
    <div className="language">
      <div className="main-language language-section">
        <img
          src={`/images/light/icons/${data.language}-flag.png`}
          width="25px"
          alt="flag"
        />
        <span>{data.language}</span>
      </div>
      <div
        className="language-section"
        onClick={() => {
          localStorage.setItem(
            "language",
            data.other.toLowerCase().slice(0, 2)
          );
          setLanguage(data.other.toLowerCase().slice(0, 2));
        }}
      >
        <img
          src={`/images/light/icons/${data.other}-flag.png`}
          width="25px"
          alt=" flag"
        />
        <span>{data.other}</span>
      </div>
    </div>
  );
};

export default Language;
