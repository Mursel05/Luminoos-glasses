import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useContext } from "react";
import { LanguageContext, SortContext } from "../App";
import langData from "../languageData";

const Eyeglasses = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].empty);

  useEffect(() => {
    setData(langData[language].empty);
  }, [language]);
  const { sortedData } = useContext(SortContext);
  const products = sortedData.filter(
    (product) => product.typeEn == "Eyeglasses"
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

export default Eyeglasses;
