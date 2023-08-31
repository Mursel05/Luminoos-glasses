import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import langData from "../languageData";
import { useEffect } from "react";
import { LanguageContext } from "../Router";

const Footer = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].footer);

  useEffect(() => {
    setData(langData[language].footer);
  }, [language]);
  const theme = localStorage.getItem("mode");
  const [hoverFacebook, setHoverFacebook] = useState(
    `/images/${theme}/icons/facebook-logo.png`
  );
  const [hoverTwitter, setHoverTwitter] = useState(
    `/images/${theme}/icons/twitter-logo.png`
  );
  const [hoverInstagram, setHoverInstagram] = useState(
    `/images/${theme}/icons/instagram-logo.png`
  );
  return (
    <div className="footer">
      <div className="logo-parts">
        <NavLink
          className={({ isActive }) => (isActive ? "logo-link" : "logo-link")}
          to="/"
        >
          <div className="logo">
            <span>LUMIN</span>
            <img src={`/images/${theme}/logo/logo.png`} alt="logo" />
            <span>S</span>
          </div>
        </NavLink>
        <div className="apps-icons">
          <Link
            to={
              "https://www.facebook.com/profile.php?id=61550758257593&mibextid=ZbWKwL"
            }
            target="_blank"
          >
            <img
              onMouseEnter={() => {
                setHoverFacebook(
                  `/images/${theme}/icons/facebook-logo-active.png`
                );
              }}
              onMouseLeave={() => {
                setHoverFacebook(`/images/${theme}/icons/facebook-logo.png`);
              }}
              src={hoverFacebook}
              alt="facebook"
            />
          </Link>
          <Link
            to={
              "https://instagram.com/luminoos1?utm_source=qr&igshid=ZDc4ODBmNjlmNQ=="
            }
            target="_blank"
          >
            <img
              onMouseEnter={() => {
                setHoverInstagram(
                  `/images/${theme}/icons/instagram-logo-active.png`
                );
              }}
              onMouseLeave={() => {
                setHoverInstagram(`/images/${theme}/icons/instagram-logo.png`);
              }}
              src={hoverInstagram}
              alt="instagram"
            />
          </Link>
          <Link to={"https://twitter.com/Luminoos13882?s=09"} target="_blank">
            <img
              onMouseEnter={() => {
                setHoverTwitter(
                  `/images/${theme}/icons/twitter-logo-active.png`
                );
              }}
              onMouseLeave={() => {
                setHoverTwitter(`/images/${theme}/icons/twitter-logo.png`);
              }}
              src={hoverTwitter}
              alt="twitter"
            />
          </Link>
        </div>
        <span className="copyright">&copy; {data.copyright}</span>
      </div>
      <div className="links-part">
        <span className="links-name">{data.category.header}</span>
        <div className="links-column">
          <NavLink
            to="/Sunglasses"
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
          >
            {data.category.link1}
          </NavLink>
          <NavLink
            to="/Game Glasses"
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
          >
            {data.category.link2}
          </NavLink>
          <NavLink
            to="/Eyeglasses"
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
          >
            {data.category.link3}
          </NavLink>
        </div>
      </div>
      <div className="links-part">
        <span className="links-name">{data.information.header}</span>
        <div className="links-column">
          <NavLink
            to="/About Us"
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
          >
            {data.information.link1}
          </NavLink>
          <NavLink
            to="/Contact Us"
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
          >
            {data.information.link2}
          </NavLink>
          <NavLink
            to="/FAQ"
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
          >
            {data.information.link3}
          </NavLink>
        </div>
      </div>
      <div className="links-part">
        <span className="links-name">{data.others.header}</span>
        <div className="links-column">
          <NavLink to="/Service" className="navLink">
            {data.others.link1}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
