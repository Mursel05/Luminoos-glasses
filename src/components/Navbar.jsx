import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="logo-link" to="/">
        <div className="logo">
          <span>LUMIN</span>
          <img src="/images/logo/logo-light.png" alt="logo" />
          <span>S</span>
        </div>{" "}
      </NavLink>
      <div className="links">
        <NavLink className="link" to="/Sunglasses">
          Sunglasses
        </NavLink>
        <NavLink className="link" to="/Eyeglasses">
          Eyeglasses
        </NavLink>
        <NavLink className="link" to="/Game Glasses">
          Game Glasses
        </NavLink>
        <NavLink className="link" to="/Service">
          Service
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
