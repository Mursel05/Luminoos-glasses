import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const [changeVisibility, setChangeVisibility] = useState("");
  const [activeCart, setActiveCart] = useState(
    "/images/light/icons/shopping-cart-icon.png"
  );
  const [activeWishlist, setActiveWishlist] = useState(
    "/images/light/icons/heart-icon.png"
  );
  return (
    <div className="product" key={product.id}>
      <span className="product-type">{product.type}</span>
      <div
        className={changeVisibility}
        onMouseEnter={() => {
          setChangeVisibility("show-section");
        }}
        onMouseLeave={() => {
          setChangeVisibility("");
        }}
      >
        <div className="link-sections">
          <div
            className="link-section"
            onMouseEnter={() => {
              setActiveCart(
                "/images/light/icons/shopping-cart-icon-active2.png"
              );
            }}
            onMouseLeave={() => {
              setActiveCart("/images/light/icons/shopping-cart-icon.png");
            }}
          >
            <img src={activeCart} alt="heart icon" />
          </div>
          <div
            className="link-section"
            onMouseEnter={() => {
              setActiveWishlist("/images/light/icons/heart-icon-active2.png");
            }}
            onMouseLeave={() => {
              setActiveWishlist("/images/light/icons/heart-icon.png");
            }}
          >
            <img src={activeWishlist} alt="heart icon" />
          </div>
        </div>
        <NavLink to={`/Details/${product.id}`}>
          <img src={product.image} alt="glasses" className="product-image" />
        </NavLink>
      </div>
      <div className="product-name-price-brand">
        <div className="product-name-price">
          <NavLink className="navLink" to={`/Details/${product.id}`}>
            <span className="product-name">{product.name}</span>
          </NavLink>
          <span className="product-price">{product.price}$</span>
        </div>
        <span className="product-brand">{product.brand}</span>
      </div>
    </div>
  );
};

export default Product;
