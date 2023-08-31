import React from "react";
import Product from "./Product";
import { SortContext } from "../Router";
import { useContext } from "react";

const Sunglasses = () => {
  const { sortedData } = useContext(SortContext);
  const products = sortedData.filter((product) => product.typeEn == "Sunglasses");
  if (products == false) {
    return (
      <div className="no-match">
        <p>No matching products were found</p>
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
