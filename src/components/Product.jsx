import React, { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import langData from "../languageData";
import { useEffect } from "react";
import { LanguageContext } from "../Router";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";

const Product = ({ product, active }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].details);

  useEffect(() => {
    setData(langData[language].details);
  }, [language]);

  function goDetail() {
    navigate(`/Details/${product.id}`);
    goToTop();
  }
  const navigate = useNavigate();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const theme = localStorage.getItem("mode");
  const { items, addItem, removeItem, updateItemQuantity } = useCart();
  const {
    addWishlistItem,
    items: wishItems,
    removeWishlistItem,
  } = useWishlist();
  const [changeVisibility, setChangeVisibility] = useState("");
  const [activeCart, setActiveCart] = useState(
    `/images/${theme}/icons/shopping-cart-icon.png`
  );
  const [activeWishlist, setActiveWishlist] = useState(
    `/images/${theme}/icons/heart-icon.png`
  );
  return (
    <div className="product" key={product.id}>
      <span className="product-type">
        {language == "en" ? product.typeEn : product.typeAz}
      </span>
      {product.hot == false ? (
        ""
      ) : (
        <span className="product-hot">{data.new}</span>
      )}
      <div
        className={changeVisibility}
        onMouseEnter={() => {
          setChangeVisibility("show-section");
        }}
        onMouseLeave={() => {
          setChangeVisibility("");
        }}
      >
        <div className="link-sections" onClick={goDetail}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (
                items.some((item) => {
                  return item.id == product.id;
                })
              ) {
                toast.success(
                  `${product.name} removed from cart successfully.`
                );
                removeItem(product.id);
              } else {
                toast.success(`${product.name} added to cart successfully.`);
                addItem(product);
              }
            }}
            className="link-section"
            onMouseEnter={() => {
              setActiveCart(
                `/images/${theme}/icons/shopping-cart-icon-active2.png`
              );
            }}
            onMouseLeave={() => {
              setActiveCart(`/images/${theme}/icons/shopping-cart-icon.png`);
            }}
          >
            {items.some((item) => {
              return item.id == product.id;
            }) ? (
              <img
                src={`/images/${theme}/icons/shopping-cart-icon-active2.png`}
                alt="cart icon"
                style={{ backgroundColor: "#ed0f0f" }}
              />
            ) : (
              <img src={activeCart} alt="cart icon" />
            )}
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (
                wishItems.some((item) => {
                  return item.id == product.id;
                })
              ) {
                toast.success(
                  `${product.name} removed from wishlist successfully.`
                );
                removeWishlistItem(product.id);
              } else {
                toast.success(
                  `${product.name} added to wishlist successfully.`
                );
                addWishlistItem(product);
              }
            }}
            className="link-section"
            onMouseEnter={() => {
              setActiveWishlist(
                `/images/${theme}/icons/heart-icon-active2.png`
              );
            }}
            onMouseLeave={() => {
              setActiveWishlist(`/images/${theme}/icons/heart-icon.png`);
            }}
          >
            {wishItems.some((item) => {
              return item.id == product.id;
            }) ? (
              <img
                src={`/images/${theme}/icons/heart-icon-active2.png`}
                alt="heart icon"
                style={{ backgroundColor: "#ed0f0f" }}
              />
            ) : (
              <img src={activeWishlist} alt="heart icon" />
            )}
          </div>
        </div>
        <img
          onClick={goDetail}
          src={product.image}
          alt="glasses"
          className="product-image"
        />
      </div>
      <div className="product-info">
        <div className="product-name-price-brand">
          <div className="product-name-price">
            <NavLink
              className="navLink"
              to={`/Details/${product.id}`}
              onClick={goToTop}
            >
              {active && (
                <span className="product-quantity"> {product.quantity} x </span>
              )}
              <span className="product-name">{product.name}</span>
            </NavLink>
            <span
              className="product-price"
              style={{ textDecoration: product.price > 100 && "line-through" }}
            >
              {product.price}$
            </span>
            {!active && product.price > 100 && (
              <span className="product-price">
                {(product.price * 0.7).toFixed(2)}$
              </span>
            )}
          </div>
          <div className="price-brand">
            <span className="product-brand">{product.brand}</span>
            {active && product.price > 100 && (
              <span className="product-price">
                {(product.price * 0.7).toFixed(2)}$
              </span>
            )}
          </div>
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
      <div className="rate">
        <img
          src={
            product.rate > 0
              ? "/images/light/icons/star-icon-point.png"
              : "/images/light/icons/star-icon.png"
          }
          alt="star"
        />
        <img
          src={
            product.rate > 1
              ? "/images/light/icons/star-icon-point.png"
              : "/images/light/icons/star-icon.png"
          }
          alt="star"
        />
        <img
          src={
            product.rate > 2
              ? "/images/light/icons/star-icon-point.png"
              : "/images/light/icons/star-icon.png"
          }
          alt="star"
        />
        <img
          src={
            product.rate > 3
              ? "/images/light/icons/star-icon-point.png"
              : "/images/light/icons/star-icon.png"
          }
          alt="star"
        />
        <img
          src={
            product.rate > 4
              ? "/images/light/icons/star-icon-point.png"
              : "/images/light/icons/star-icon.png"
          }
          alt="star"
        />
      </div>
    </div>
  );
};

export default Product;
