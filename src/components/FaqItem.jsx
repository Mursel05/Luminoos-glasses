import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../App";
import langData from "../languageData";
import { useState } from "react";
import { useEffect } from "react";

const FaqItem = ({ item, open, onSetOpen }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].faq);

  useEffect(() => {
    setData(langData[language].faq);
  }, [language]);

  return (
    <div className={open === item.id ? "open item" : "item"}>
      <div className="first-part">
        <div className="id-question">
          <div className="id-circle">
            <p>{item.id}</p>
          </div>
          <span>{language === "en" ? item.questionEn : item.questionAz}</span>
        </div>
        <img
          onClick={() => onSetOpen(open === item.id ? "" : item.id)}
          src="/images/light/icons/arrow-icon-down.png"
          alt="arrow"
        />
      </div>
      <span className="item-answer">
        {language === "en" ? item.answerEn : item.answerAz}
      </span>
    </div>
  );
};

export default FaqItem;
