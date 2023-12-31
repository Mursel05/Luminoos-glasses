import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../App";
import langData from "../languageData";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].navbar);
  const theme = localStorage.getItem("mode");
  const [menuImg, setMenuImg] = useState(
    `/images/${theme}/icons/menu-icon.png`
  );
  const [appear, setAppear] = useState("links menu");

  useEffect(() => {
    setData(langData[language].navbar);
  }, [language]);

  return (
    <div className="navbar">
      <div className="navbar-part">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "logo-link" : "logo-link")}
        >
          <div className="logo">
            <span>LUMIN</span>
            <img src={`/images/${theme}/logo/logo.png`} alt="logo" />
            <span>S</span>
          </div>
        </NavLink>
        <img
          src={menuImg}
          alt="menu"
          onClick={() => {
            setAppear(
              appear === "links menu" ? "links  menu appear" : "links menu"
            );
            setMenuImg(
              menuImg === `/images/${theme}/icons/menu-icon.png`
                ? `/images/${theme}/icons/cancel-icon.png`
                : `/images/${theme}/icons/menu-icon.png`
            );
          }}
        />
        <div className="links">
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to="/Sunglasses"
          >
            <span>{data.link1}</span>
            <hr className="link-line" />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to="/Game Glasses"
          >
            <span>{data.link2}</span>
            <hr className="link-line" />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to="/Eyeglasses"
          >
            <span>{data.link3}</span>
            <hr className="link-line" />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to="/Service"
          >
            <span>{data.link4}</span>
            <hr className="link-line" />
          </NavLink>
        </div>
      </div>
      <div className={appear}>
        <NavLink
          className={({ isActive }) => (isActive ? "active link" : "link")}
          to="/Sunglasses"
        >
          <span>{data.link1}</span>
          <hr className="link-line" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active link" : "link")}
          to="/Game Glasses"
        >
          <span>{data.link2}</span>
          <hr className="link-line" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active link" : "link")}
          to="/Eyeglasses"
        >
          <span>{data.link3}</span>
          <hr className="link-line" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active link" : "link")}
          to="/Service"
        >
          <span>{data.link4}</span>
          <hr className="link-line" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
