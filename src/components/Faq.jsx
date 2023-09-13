import React, { useContext, useEffect } from "react";
import FaqItem from "./FaqItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LanguageContext } from "../Router";
import langData from "../languageData";

const Faq = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].faq);

  useEffect(() => {
    setData(langData[language].faq);
  }, [language]);
  const [open, setOpen] = useState("");
  const faq = useSelector((state) => state.fetchReducer.faq);
  return (
    <div className="faq">
      <h1>{data}</h1>
      <div className="items">
        {faq.map((item) => (
          <FaqItem item={item} open={open} onSetOpen={setOpen} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
