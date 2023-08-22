import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
        <NavLink className="logo-link" to="/">
          <div className="logo">
            <span>LUMIN</span>
            <img src={`/images/${theme}/logo/logo.png`} alt="logo" />
            <span>S</span>
          </div>
        </NavLink>
        <div className="apps-icons">
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
          <img
            onMouseEnter={() => {
              setHoverTwitter(`/images/${theme}/icons/twitter-logo-active.png`);
            }}
            onMouseLeave={() => {
              setHoverTwitter(`/images/${theme}/icons/twitter-logo.png`);
            }}
            src={hoverTwitter}
            alt="twitter"
          />
        </div>
        <span className="copyright">
          &copy; Copyright 2023 | Luminoos By Duman. All rights reserved.
        </span>
      </div>
      <div className="links-part">
        <span className="links-name">Category</span>
        <div className="links-column">
          <NavLink className="navLink">Sunglasses</NavLink>
          <NavLink className="navLink">Game glasses</NavLink>
          <NavLink className="navLink">Eyeglasses</NavLink>
        </div>
      </div>
      <div className="links-part">
        <span className="links-name">Information</span>
        <div className="links-column">
          <NavLink className="navLink">About Us</NavLink>
          <NavLink className="navLink">Contact Us</NavLink>
          <NavLink className="navLink">FAQ</NavLink>
        </div>
      </div>
      <div className="links-part">
        <span className="links-name">Others</span>
        <div className="links-column">
          <NavLink className="navLink">Service</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
