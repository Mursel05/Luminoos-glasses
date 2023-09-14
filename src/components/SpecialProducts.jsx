import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { useContext } from "react";
import { LanguageContext } from "../Router";
import { useState } from "react";
import { useEffect } from "react";
import langData from "../languageData";
import { Helmet } from "react-helmet";

const SpecialProducts = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].special);

  useEffect(() => {
    setData(langData[language].special);
  }, [language]);

  let product = useParams();
  const products = useSelector((state) => state.fetchReducer.products).filter(
    (item) => item[product.sort] == product.value
  );
  return (
    <div className="special-products">
      <h1>{data}</h1>
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
