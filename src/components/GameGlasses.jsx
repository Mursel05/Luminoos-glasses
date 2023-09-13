import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { LanguageContext, SortContext } from "../Router";
import langData from "../languageData";
import { useState } from "react";
import { useEffect } from "react";

const GameGlasses = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].empty);

  useEffect(() => {
    setData(langData[language].empty);
  }, [language]);
  const { sortedData } = useContext(SortContext);
  const products = sortedData.filter((product) => product.typeEn == "Game Glasses");
  if (products == false) {
    return (
      <div className="no-match">
        <p>{data}</p>
      </div>
    );
  }
  if (products) {
    return (
      <div className="sunglasses">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    );
  }
};

export default GameGlasses;
