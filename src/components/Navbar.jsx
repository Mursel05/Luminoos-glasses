import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="logo-link" to="/">
        <div className="logo">
          <span>LUMIN</span>
          <img src="/images/light/logo/logo.png" alt="logo" />
          <span>S</span>
        </div>{" "}
      </NavLink>
      <div className="links">
        <NavLink className="link" to="/Sunglasses">
          <span>Sunglasses</span>
          <hr className="link-line" />
        </NavLink>
        <NavLink className="link" to="/Eyeglasses">
          <span>Eyeglasses</span>
          <hr className="link-line" />
        </NavLink>
        <NavLink className="link" to="/Game Glasses">
          <span>Game Glasses</span>
          <hr className="link-line" />
        </NavLink>
        <NavLink className="link" to="/Service">
          <span>Service</span>
          <hr className="link-line" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
