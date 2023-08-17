import React, { useContext, useEffect, useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import { DataContext } from "../router";
import supabase from "../supabase";

const Details = () => {
  const { addItem, items, removeItem } = useCart();
  const [data, setData] = useState("");
  const [errorAppearance, setErrorAppearance] = useState("0");
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("promo-code")
        .select("*")
        .limit(1);
      if (error) throw error;
      if (data !== "") setData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [activeWishlist, setActiveWishlist] = useState(
    "/images/light/icons/heart-icon.png"
  );
  const [isChecked, setIsChecked] = useState(false);
  const [code, setCode] = useState("");
  let id = useParams();
  const products = useContext(DataContext);
  const product = products && products.find((product) => product.id == id.id);
  const [price, setPrice] = useState(product.price);
  const falseCode = () => {
    setPrice(product.price);
    setErrorAppearance("1");
  };
  const trueCode = () => {
    isChecked
      ? setPrice((product.price / 2).toFixed(2))
      : setPrice(product.price);
    setErrorAppearance("0");
  };
  return (
    <div className="details">
      <div className="product-type-image">
        <span className="product-type">{product.type}</span>
        <img src={product.image} alt={`${product.name} glasses`} />
      </div>
      <div className="product-details">
        <span className="product-name">{product.name}</span>
        <div className="product-brand-gender">
          <span className="product-brand">{product.brand}</span>
          <span className="product-gender">{product.gender}</span>
        </div>
        <div className="product-color-hot">
          <span className="product-color">
            Color: <span className="color">{product.color}</span>
            <div
              className="circle-color"
              style={{ backgroundColor: product.color }}
            ></div>
          </span>
          {product.hot == false ? "" : <span className="product-hot">Hot</span>}
        </div>
        <p>
          {product.name} These oval glasses are flexible and lightweight for
          all-day comfort. The medium-wide acetate frame features matte
          turquoise textured embellishments on the outside corners of the frame
          that match the temple arms.
        </p>
        <div className="price">
          <div className="initially-price">
            <div className="product-properties">
              <span className="properties-title">Price includes</span>
              <div className="properties">
                <span className="property">• Frame & cleaning cloth</span>
                <span className="property">• Quality 1.5 index lenses</span>
              </div>
            </div>
            <span className="product-price">
              ${price == undefined ? product.price : price}
            </span>
          </div>
          <div className="promo-code">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
                if (isChecked) {
                  setPrice(product.price);
                }
              }}
              id="promo-checkbox"
            />
            <label htmlFor="promo-checkbox">Enter promo code</label>
          </div>
          {isChecked == true && (
            <div>
              <div className="enter-promo-code">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    if (data != "") {
                      data.some((item) => {
                        return item.code == code;
                      })
                        ? trueCode()
                        : falseCode();
                    }
                  }}
                >
                  Get discount
                </button>
              </div>
              <div>
                <span
                  className="code-error"
                  style={{ opacity: errorAppearance }}
                >
                  Wrong code
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="product-cart-wishlist">
          <button
            onClick={() => {
              items.some((item) => {
                return item.id == product.id;
              })
                ? removeItem(product.id)
                : addItem(product);
            }}
          >
            {items.some((item) => {
              return item.id == product.id;
            })
              ? "Remove from cart"
              : "Add to cart"}
          </button>

          <img
            src={activeWishlist}
            alt="heart icon"
            onMouseEnter={() => {
              setActiveWishlist("/images/light/icons/heart-icon-active3.png");
            }}
            onMouseLeave={() => {
              setActiveWishlist("/images/light/icons/heart-icon.png");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
