import React, { useState } from "react";
import DarkMode from "./DarkMode";
import Language from "./Language";
import Search from "./Search";
import { NavLink } from "react-router-dom";

const Section = () => {
  const theme = localStorage.getItem("mode");
  const [hiddenPart, setHiddenPart] = useState("hidden login");
  const [activeProfile, setActiveProfile] = useState(
    `/images/${theme}/icons/account-icon.png`
  );
  const [activeCart, setActiveCart] = useState(
    `/images/${theme}/icons/shopping-cart-icon.png`
  );
  const [activeWishlist, setActiveWishlist] = useState(
    `/images/${theme}/icons/heart-icon.png`
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
        <NavLink className="navLink" to="/Cart">
          <div
            className="link-section"
            onMouseEnter={() => {
              setActiveCart(
                `/images/${theme}/icons/shopping-cart-icon-active1.png`
              );
            }}
            onMouseLeave={() => {
              setActiveCart(`/images/${theme}/icons/shopping-cart-icon.png`);
            }}
          >
            <img src={activeCart} alt="heart icon" />
            <span>Cart</span>
          </div>
        </NavLink>
        <NavLink className="navLink" to="/Wishlist">
          <div
            className="link-section"
            onMouseEnter={() => {
              setActiveWishlist(
                `/images/${theme}/icons/heart-icon-active1.png`
              );
            }}
            onMouseLeave={() => {
              setActiveWishlist(`/images/${theme}/icons/heart-icon.png`);
            }}
          >
            <img src={activeWishlist} alt="heart icon" />
            <span>Wishlist</span>
          </div>
        </NavLink>

        <div
          className="profile"
          onMouseEnter={() => {
            setActiveProfile(`/images/${theme}/icons/account-icon-active.png`);
          }}
          onMouseLeave={() => {
            setActiveProfile(`/images/${theme}/icons/account-icon.png`);
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
