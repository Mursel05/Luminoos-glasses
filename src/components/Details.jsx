import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useContext } from "react";
import langData from "../languageData";
import { LanguageContext } from "../Router";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";

const Details = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].details);

  useEffect(() => {
    setData(langData[language].details);
  }, [language]);
  const { addItem, items, removeItem } = useCart();
  const {
    addWishlistItem,
    items: wishItems,
    removeWishlistItem,
  } = useWishlist();
  const [activeWishlist, setActiveWishlist] = useState(
    "/images/light/icons/heart-icon.png"
  );
  let id = useParams();
  const products = useSelector((state) => state.fetchReducer.products);
  const product = products.find((product) => product.id == id.id);
  if (product != undefined) {
    return (
      <div className="details">
        <div>
          <span className="product-type">
            {language == "en" ? product.typeEn : product.typeAz}
          </span>
          {product.hot == false ? (
            ""
          ) : (
            <span className="product-hot">{data.new}</span>
          )}
          <img src={product.image} alt={`${product.name} glasses`} />
        </div>
        <div className="product-details">
          <span className="product-name">{product.name}</span>
          <div className="product-brand-gender">
            <span className="product-brand">{product.brand}</span>
            <span className="product-gender">
              {language == "en" ? product.genderEn : product.genderAz}
            </span>
          </div>
          <span className="product-color">
            {data.color}:{" "}
            <span className="color">
              {language == "en" ? product.colorEn : product.colorAz}
            </span>
            <div
              className="circle-color"
              style={{ backgroundColor: product.colorEn }}
            ></div>
          </span>
          <p className="product-text">
            {product.name} {data.description}
          </p>
          <div className="price">
            <div className="product-properties">
              <span className="properties-title">{data.priceHeader}</span>
              <div className="properties">
                <span className="property">• {data.include1}</span>
                <span className="property">• {data.include2}</span>
              </div>
            </div>
            <span className="product-price">${product.price}</span>
          </div>
          <div className="product-cart-wishlist">
            <button
              onClick={() => {
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
            >
              {items.some((item) => {
                return item.id == product.id;
              })
                ? data.mainBtn2
                : data.mainBtn1}
            </button>
            <img
              src={
                wishItems.some((item) => {
                  return item.id == product.id;
                })
                  ? "/images/light/icons/heart-icon-active3.png"
                  : "/images/light/icons/heart-icon.png"
              }
              alt="heart icon"
              onMouseEnter={() => {
                setActiveWishlist("/images/light/icons/heart-icon-active3.png");
              }}
              onMouseLeave={() => {
                setActiveWishlist("/images/light/icons/heart-icon.png");
              }}
              onClick={() => {
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
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
