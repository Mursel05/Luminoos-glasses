import React from "react";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ product, onSetData }) => {
  const navigate = useNavigate();
  return (
    <div
      className="search-item"
      onClick={() => {
        onSetData([]);
        navigate(`/Details/${product.id}`);
      }}
    >
      <img src={product.image} alt="glasses" />
      <div className="item-properties">
        <span>{product.name}</span>
        <div className="prices">
          <span
            className="product-price"
            style={{ textDecoration: product.price > 100 && "line-through" }}
          >
            {product.price}$
          </span>
          {product.price > 100 && (
            <span>{(product.price * 0.7).toFixed(2)}$</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
