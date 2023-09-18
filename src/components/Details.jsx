import React, { useRef, useState } from "react";
import { useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useContext } from "react";
import langData from "../languageData";
import { LanguageContext } from "../App";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import RateForm from "./RateForm";
import ShowReview from "./ShowReview";

const Details = () => {
  const theme = localStorage.getItem("mode");
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

  let id = useParams();
  const products = useSelector((state) => state.fetchReducer.products);
  const product = products.find((product) => product.id == id.id);

  const scrollRef = useRef("");
  const goToElement = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [appearForm, setAppearForm] = useState("send-review");
  const [appearReview, setAppearReview] = useState("reviews hidden");
  let sum = 0;
  product &&
    product.review.map((item) => {
      return (sum += item.rate);
    });
  const rate = product && sum / product.review.length;

  if (product != undefined) {
    return (
      <div className="details-review">
        <Helmet>
          <title>{`${product.brand} ${product.name}`}</title>
        </Helmet>
        <div className="details">
          <div className="product-type-hot">
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
            <div className="color-rate">
              <span className="product-color">
                {data.color}:
                <span className="color">
                  {language == "en" ? product.colorEn : product.colorAz}
                </span>
                <div
                  className="circle-color"
                  style={{ backgroundColor: product.colorEn }}
                ></div>
              </span>
              <div className="rate-review">
                <div className="rate">
                  <img
                    src={
                      rate > 0
                        ? `/images/${theme}/icons/star-icon-point.png`
                        : `/images/${theme}/icons/star-icon.png`
                    }
                    alt="star"
                  />
                  <img
                    src={
                      rate > 1
                        ? `/images/${theme}/icons/star-icon-point.png`
                        : `/images/${theme}/icons/star-icon.png`
                    }
                    alt="star"
                  />
                  <img
                    src={
                      rate > 2
                        ? `/images/${theme}/icons/star-icon-point.png`
                        : `/images/${theme}/icons/star-icon.png`
                    }
                    alt="star"
                  />
                  <img
                    src={
                      rate > 3
                        ? `/images/${theme}/icons/star-icon-point.png`
                        : `/images/${theme}/icons/star-icon.png`
                    }
                    alt="star"
                  />
                  <img
                    src={
                      rate > 4
                        ? `/images/${theme}/icons/star-icon-point.png`
                        : `/images/${theme}/icons/star-icon.png`
                    }
                    alt="star"
                  />
                </div>
                <div className="review">
                  <div
                    className="img-number"
                    onClick={() => {
                      if (product.review.length) {
                        setTimeout(goToElement, 1);
                        setAppearReview(
                          appearReview === "reviews"
                            ? "reviews hidden"
                            : "reviews"
                        );
                      }
                    }}
                  >
                    <img
                      src={`/images/${theme}/icons/review-icon.png`}
                      alt="review"
                    />
                    <div className="number">
                      <span>{product.review.length}</span>
                    </div>
                  </div>
                  <span
                    className="review-link"
                    onClick={() => setAppearForm("send-review appear")}
                  >
                    {data.linkReview}
                  </span>
                </div>
              </div>
            </div>
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
              <div className="prices">
                <span
                  className="product-price"
                  style={{
                    fontSize: product.price > 100 && "1.2rem",
                    textDecoration: product.price > 100 && "line-through",
                  }}
                >
                  ${product.price}
                </span>
                {product.price > 100 && (
                  <span className="product-price">
                    {(product.price * 0.7).toFixed(2)}$
                  </span>
                )}
              </div>
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
                    toast.success(
                      `${product.name} added to cart successfully.`
                    );
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
                    ? `/images/${theme}/icons/heart-icon-active3.png`
                    : `/images/${theme}/icons/heart-icon.png`
                }
                alt="heart icon"
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
            <RateForm
              product={product}
              appearForm={appearForm}
              onSetAppearForm={setAppearForm}
            />
          </div>
        </div>
        <div className={appearReview} ref={scrollRef}>
          <p>{data.reviewHeader}</p>
          <div className="all-reviews">
            {product.review.map((item, key) => (
              <ShowReview item={item} key={key} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
