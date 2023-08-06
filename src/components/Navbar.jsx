import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>LUMIN</span>
        <img src="/images/logo/logo-light.png" alt="logo" />
        <span>S</span>
      </div>
      <div className="links">
        <NavLink className="link">Sunglasses</NavLink>
        <NavLink className="link">Eyeglasses</NavLink>
        <NavLink className="link">Game Glasses</NavLink>
        <NavLink className="link">Service</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
