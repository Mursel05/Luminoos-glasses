import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const Recommend = ({ id }) => {
  const products = useSelector((state) => state.allReducer.products);
  const mainProduct =
    products &&
    products.find((product) => {
      return product.id == id.id;
    });
  return (
    <div className="recommend">
      <h1>Recommend</h1>
      <div className="four-product">
        {products &&
          products
            .filter((product) => {
              return (
                product.type == mainProduct.type &&
                product.id != mainProduct.id &&
                product.gender == mainProduct.gender
              );
            })
            .slice(0, 4)
            .map((product) => {
              return (
                <div>
                  <Product product={product} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Recommend;
