import React, { useState } from "react";
import DarkMode from "./DarkMode";
import Language from "./Language";
import Search from "./Search";
import { NavLink } from "react-router-dom";

const Section = () => {
  const [hiddenPart, setHiddenPart] = useState("hidden login");
  const [activeProfile, setActiveProfile] = useState(
    "/images/light/icons/account-icon.png"
  );
  const [activeCart, setActiveCart] = useState(
    "/images/light/icons/shopping-cart-icon.png"
  );
  const [activeWishlist, setActiveWishlist] = useState(
    "/images/light/icons/heart-icon.png"
  );
  return (
    <div className="section">
      <div className="section-first-part">
        <DarkMode />
        <Language />
        <Search />
      </div>
      <div className="links-account">
        <div className="links">
          <NavLink className="link" to="/Shopping Cart">
            <span>Add Product</span>
            <hr className="link-line" />
          </NavLink>
        </div>
        <div
          className="link-section"
          onMouseEnter={() => {
            setActiveCart("/images/light/icons/shopping-cart-icon-active.png");
          }}
          onMouseLeave={() => {
            setActiveCart("/images/light/icons/shopping-cart-icon.png");
          }}
        >
          <img src={activeCart} alt="heart icon" />
          <span>Cart</span>
        </div>
        <div
          className="link-section"
          onMouseEnter={() => {
            setActiveWishlist ("/images/light/icons/heart-icon-active.png");
          }}
          onMouseLeave={() => {
            setActiveWishlist("/images/light/icons/heart-icon.png");
          }}
        >
          <img src={activeWishlist} alt="heart icon" />
          <span>Wishlist</span>
        </div>
        <div
          className="profile"
          onMouseEnter={() => {
            setActiveProfile("/images/light/icons/account-icon-active.png");
          }}
          onMouseLeave={() => {
            setActiveProfile("/images/light/icons/account-icon.png");
          }}
          onClick={() => {
            hiddenPart === "login"
              ? setHiddenPart("hidden login")
              : setHiddenPart("login");
          }}
        >
          <div className="link-section">
            <img src={activeProfile} alt="account-icon" />
            <span>Login</span>
          </div>
          <div className={hiddenPart}>
            <span>Sign In</span>
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
