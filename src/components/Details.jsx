import React, { useContext, useState } from "react";
import { useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import { DataContext } from "../router";

const Details = () => {
  const { addItem, items, removeItem } = useCart();

  const [activeWishlist, setActiveWishlist] = useState(
    "/images/light/icons/heart-icon.png"
  );
  let id = useParams();
  const products = useContext(DataContext);
  const product = products && products.find((product) => product.id == id.id);

  return (
    <div className="details">
      <div>
        <span className="product-type">{product.type}</span>
        {product.hot == false ? "" : <span className="product-hot">Hot</span>}
        <img src={product.image} alt={`${product.name} glasses`} />
      </div>
      <div className="product-details">
        <span className="product-name">{product.name}</span>
        <div className="product-brand-gender">
          <span className="product-brand">{product.brand}</span>
          <span className="product-gender">{product.gender}</span>
        </div>
        <span className="product-color">
          Color: <span className="color">{product.color}</span>
          <div
            className="circle-color"
            style={{ backgroundColor: product.color }}
          ></div>
        </span>
        <p className="product-text">
          {product.name} These oval glasses are flexible and lightweight for
          all-day comfort. The medium-wide acetate frame features matte
          turquoise textured embellishments on the outside corners of the frame
          that match the temple arms.
        </p>
        <div className="price">
            <div className="product-properties">
              <span className="properties-title">Price includes</span>
              <div className="properties">
                <span className="property">• Frame & cleaning cloth</span>
                <span className="property">• Quality 1.5 index lenses</span>
              </div>
            </div>
            <span className="product-price">${product.price}</span>
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
