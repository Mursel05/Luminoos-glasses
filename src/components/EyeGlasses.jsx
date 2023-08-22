import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Eyeglasses = () => {
  const products = useSelector((state) => state.allReducer.products).filter(
    (product) => product.type == "Eyeglasses"
  );
  if (products !== "") {
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
