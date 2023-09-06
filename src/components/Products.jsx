import React from "react";
import { useSelector } from "react-redux";
import ProductsSingle from "./ProductsSingle";

const Products = () => {
  const products = useSelector((state) => state.fetchReducer.products);
  return (
    <div className="admin-products">
      {products.map((product) => (
        <ProductsSingle product={product} key={product.id} />
      ))}
      <div>
        <ProductsSingle />
      </div>
    </div>
  );
};

export default Products;
