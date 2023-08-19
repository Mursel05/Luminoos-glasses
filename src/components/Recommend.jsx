import React, { useContext } from "react";
import { DataContext } from "../router";
import Product from "./Product";

const Recommend = ({ id }) => {
  const products = useContext(DataContext);
  const mainProduct =
    products &&
    products.find((product) => {
      return product.id == id.id;
    });
  console.log(mainProduct);
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
