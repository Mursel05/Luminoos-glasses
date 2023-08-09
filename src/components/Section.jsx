import React from "react";
import DarkMode from "./DarkMode";
import Language from "./Language";
import Search from "./Search";
import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <div className="section">
      <div className="section-first-part">
        <DarkMode />
        <Language />
        <Search />
      </div>
      <div className="links">
        <NavLink className="link" to="/Wishlist">
          Wishlist
        </NavLink>
        <NavLink className="link" to="/Shopping Cart">
          Shopping Cart
        </NavLink>{" "}
        <NavLink className="link" to="/Shopping Cart">
          Add Product
        </NavLink>
        <div className="account">
          <img src="/images/light/icons/account-icon.png" alt="account-icon" />
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Section;
