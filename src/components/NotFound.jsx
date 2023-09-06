import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h3>Oops! That Page Can’t Be Found.</h3>
      <p>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</p>
      <div>
        <span>Please return to </span>
        <NavLink to="/" className={({ isActive }) => "navLink"}>
          Home page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
