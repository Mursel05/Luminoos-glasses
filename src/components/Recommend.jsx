import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../Router";
import langData from "../languageData";
import { useState } from "react";
import { useEffect } from "react";

const Recommend = ({ id }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].recommend);

  useEffect(() => {
    setData(langData[language].recommend);
  }, [language]);
  const products = useSelector((state) => state.fetchReducer.products);
  const mainProduct =
    products && products.find((product) => product.id == id.id);
  return (
    <div className="recommend">
      <h1>{data.header}</h1>
      <div className="four-product">
        {products &&
          products
            .filter((product) => {
              return (
                product.typeEn == mainProduct.typeEn &&
                product.id != mainProduct.id &&
                product.genderEn == mainProduct.genderEn
              );
            })
            .slice(0, 4)
            .map((product) => {
              return (
                <div key={product.id}>
                  <Product product={product} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Recommend;
