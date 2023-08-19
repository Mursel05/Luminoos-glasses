import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Product = ({ product, active }) => {
  const { items, addItem, removeItem, updateItemQuantity } = useCart();
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
      {product.hot == false ? "" : <span className="product-hot">Hot</span>}
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
            onClick={() => {
              items.some((item) => {
                return item.id == product.id;
              })
                ? removeItem(product.id)
                : addItem(product);
            }}
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
            {items.some((item) => {
              return item.id == product.id;
            }) ? (
              <img
                src="/images/light/icons/shopping-cart-icon-active2.png"
                alt="heart icon"
                style={{ backgroundColor: "#ed0f0f" }}
              />
            ) : (
              <img src={activeCart} alt="heart icon" />
            )}
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
      <div className="product-info">
        <div className="product-name-price-brand">
          <div className="product-name-price">
            <NavLink className="navLink" to={`/Details/${product.id}`}>
              {active && (
                <span className="product-quantity"> {product.quantity} x </span>
              )}
              <span className="product-name">{product.name}</span>
            </NavLink>
            <span className="product-price">{product.price}$</span>
          </div>
          <span className="product-brand">{product.brand}</span>
        </div>
        {active && (
          <div className="product-quantity-update">
            <button
              onClick={() => {
                updateItemQuantity(product.id, product.quantity - 1);
                window.location.reload();
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                updateItemQuantity(product.id, product.quantity + 1);
                window.location.reload();
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
