import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { LanguageContext } from "../App";
import langData from "../languageData";
const BestSeller = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].bestSeller);
  useEffect(() => {
    setData(langData[language].bestSeller);
  }, [language]);

  const products = useSelector((state) => state.fetchReducer.products)
    .filter((product) => product.bestSeller == true)
  if (products !== "") {
    return (
      <div className="bestSeller">
        <h1>{data.header}</h1>
        <div className="four-product">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    );
  }
};

export default BestSeller;
