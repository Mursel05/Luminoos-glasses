import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { useState } from "react";
import langData from "../languageData";
import { useEffect } from "react";
const AboutUs = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].aboutUs);

  useEffect(() => {
    setData(langData[language].aboutUs);
  }, [language]);

  return (
    <div className="about-us">
      <div className="about-header">
        <h1>{data.header}</h1>
      </div>
      <div className="about-text">
        <span>{data.firstText}</span>
        <div className="about-features">
          <div>
            <p>{data.mainHeader}</p>
            <span>{data.mainText}</span>
          </div>
          <img
            src="/images/backgrounds/about-us-side.jpg"
            alt="black glasses"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
