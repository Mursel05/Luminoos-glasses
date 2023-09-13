import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import Product from "./Product";
import langData from "../languageData";
import { LanguageContext } from "../Router";

const Wishlist = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].wishlist);

  useEffect(() => {
    setData(langData[language].wishlist);
  }, [language]);
  const { isWishlistEmpty, items } = useWishlist();
  if (isWishlistEmpty)
    return (
      <div className="wishlist">
        <div className="empty-text">
          <p>{data.empty}</p>
          <NavLink className="navLink" to="/">
            <span>{data.emptyBtn}</span>
          </NavLink>
        </div>
      </div>
    );
  return (
    <div className="wishlist">
      <p>{data.header}</p>
      <div className="wishlist-products">
        {items.map((product) => {
          return (
            <div>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
