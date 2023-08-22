import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const GameGlasses = () => {
  const products = useSelector((state) => state.allReducer.products).filter(
    (product) => product.type == "Game Glasses"
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

export default GameGlasses;
