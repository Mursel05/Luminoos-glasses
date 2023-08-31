import React, { useState } from "react";
import DarkMode from "./DarkMode";
import Language from "./Language";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext, LoginContext } from "../Router";
import langData from "../languageData";
import { useEffect } from "react";
import Login from "./Login";
import Profile from "./Profile";

const Section = () => {
  const { language } = useContext(LanguageContext);
  const session = useContext(LoginContext);
  const [data, setData] = useState(langData[language].section);
  console.log(session);
  useEffect(() => {
    setData(langData[language].section);
  }, [language]);
  const theme = localStorage.getItem("mode");
  const [hiddenPart, setHiddenPart] = useState("login");
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
        {session && session.user.user_metadata.admin ? (
          <div className="links">
            <NavLink className="link" to="/Products">
              <span>{data.link1}</span>
              <hr className="link-line" />
            </NavLink>
          </div>
        ) : (
          ""
        )}
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              setActiveCart(
                `/images/${theme}/icons/shopping-cart-icon-active1.png`
              );
              return "active navLink";
            } else {
              return "navLink";
            }
          }}
          to="/Cart"
        >
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
            <span>{data.cart}</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              setActiveWishlist(
                `/images/${theme}/icons/heart-icon-active1.png`
              );
              return "active navLink";
            } else {
              return "navLink";
            }
          }}
          to="/Wishlist"
        >
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
            <span>{data.wishlist}</span>
          </div>
        </NavLink>

        <div
          className="profile"
          onMouseEnter={() => {
            setActiveProfile(`/images/${theme}/icons/account-icon-active.png`);
            setHiddenPart("appear login");
          }}
          onMouseLeave={() => {
            setActiveProfile(`/images/${theme}/icons/account-icon.png`);
            setHiddenPart("login");
          }}
        >
          <div className="link-section">
            <img src={activeProfile} alt="account-icon" />
            <span>
              {session ? session.user.user_metadata.first_name : data.login}
            </span>
          </div>
          {session ? (
            <Profile hiddenPart={hiddenPart} onSetHiddenPart={setHiddenPart} />
          ) : (
            <Login
              hiddenPart={hiddenPart}
              onSetHiddenPart={setHiddenPart}
              onSetActiveProfile={setActiveProfile}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
