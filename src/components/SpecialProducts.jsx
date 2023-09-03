import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "./Product";

const SpecialProducts = () => {
  let data = useParams();
  const products = useSelector((state) => state.fetchReducer.products).filter(
    (product) => product[data.sort] == data.value
  );
  console.log(products);
  return (
    <div className="special-products">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
