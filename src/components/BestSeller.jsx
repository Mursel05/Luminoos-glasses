import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
const BestSeller = () => {
  const products = useSelector((state) => state.allReducer.products).filter(
    (product) => product.bestSeller == true
  );
  if (products !== "") {
    return (
      <div className="bestSeller">
        <h1>BestSeller</h1>
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
