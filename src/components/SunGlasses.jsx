import React from "react";
import Product from "./Product";
import { LanguageContext, SortContext } from "../Router";
import { useContext } from "react";
import langData from "../languageData";
import { useEffect } from "react";
import { useState } from "react";

const Sunglasses = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].empty);

  useEffect(() => {
    setData(langData[language].empty);
  }, [language]);
  const { sortedData } = useContext(SortContext);
  const products = sortedData.filter(
    (product) => product.typeEn == "Sunglasses"
  );
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

export default Sunglasses;
