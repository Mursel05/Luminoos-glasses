import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { SortContext } from "../Router";

const Eyeglasses = () => {
  const { sortedData } = useContext(SortContext);
  const products = sortedData.filter((product) => product.type == "Eyeglasses");
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

export default Eyeglasses;
