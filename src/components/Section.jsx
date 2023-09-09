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
import { toast } from "react-toastify";
import useWindowDimensions from "./GetWindowDimensions";

const Section = () => {
  const {touch} = useWindowDimensions();
  const [hiddenPart, setHiddenPart] = useState("login");
  const [signed, setSigned] = useState(false);
  const [sign, setSign] = useState("");
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].section);
  const [focusDiv, setFocusDiv] = useState(false);
  const [focusInput, setFocusInput] = useState(false);
  useEffect(() => {
    setData(langData[language].section);
  }, [language]);
  useEffect(() => {
    if (!touch) {
      if (!focusDiv && !focusInput) {
        setActiveProfile(`/images/${theme}/icons/account-icon.png`);
        setHiddenPart("login");
      }
    }
  }, [focusDiv]);
  useEffect(() => {
    if (!touch) {
      if (!focusDiv && !focusInput) {
        setActiveProfile(`/images/${theme}/icons/account-icon.png`);
        setHiddenPart("login");
      }
    }
  }, [focusInput]);

  signed === "in" &&
    setTimeout(() => {
      if (!session) {
        setSigned(false);
        toast.update(sign, {
          render: "Invalid login credentials!!!",
          type: "error",
          isLoading: false,
          closeButton: true,
          autoClose: 2000,
        });
      }
    }, 6000);

  const session = useContext(LoginContext);
  useEffect(() => {
    if (signed === "in") {
      setSign(toast.loading("Please wait, signing in..."));
    }
    signed === "out" && setSign(toast.loading("Please wait, signing out..."));
  }, [signed]);
  useEffect(() => {
    if (session) {
      setSigned(false);
      toast.update(sign, {
        render: "Signed in.",
        type: "success",
        isLoading: false,
        closeButton: true,
        autoClose: 2000,
      });
    } else {
      setSigned(false);
      toast.update(sign, {
        render: "Signed Out.",
        type: "success",
        isLoading: false,
        closeButton: true,
        autoClose: 2000,
      });
    }
  }, [session]);

  const theme = localStorage.getItem("mode");
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
            if (!touch) {
              setActiveProfile(
                `/images/${theme}/icons/account-icon-active.png`
              );
              setHiddenPart("appear login");
              setFocusDiv(true);
            }
          }}
          onMouseLeave={() => {
            if (!touch) {
              setFocusDiv(false);
              if (!focusDiv && !focusInput) {
                setActiveProfile(`/images/${theme}/icons/account-icon.png`);
                setHiddenPart("login");
              }
            }
          }}
        >
          <div
            className="link-section"
            onClick={() => {
              if (touch) {
                setActiveProfile(
                  activeProfile === `/images/${theme}/icons/account-icon.png`
                    ? `/images/${theme}/icons/account-icon-active.png`
                    : `/images/${theme}/icons/account-icon.png`
                );
                setHiddenPart(
                  hiddenPart === "login" ? "appear login" : "login"
                );
                setFocusDiv(!focusDiv);
              }
            }}
          >
            <img src={activeProfile} alt="account-icon" />
            <span>
              {session ? session.user.user_metadata.first_name : data.login}
            </span>
          </div>
          {session ? (
            <Profile hiddenPart={hiddenPart} onSetSigned={setSigned} />
          ) : (
            <Login
              hiddenPart={hiddenPart}
              onSetHiddenPart={setHiddenPart}
              onSetActiveProfile={setActiveProfile}
              onSetSigned={setSigned}
              onSetFocusInput={setFocusInput}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
