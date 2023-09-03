import supabase from "../supabase";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../Router";
import { useContext } from "react";

const Profile = ({ hiddenPart, onSetSigned }) => {
  const session = useContext(LoginContext);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  const navigate = useNavigate();
  return (
    <div className={`${hiddenPart} signed`}>
      <span className="header">Welcome Back</span>
      <div className="signed-links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navLink" : "navLink"
          }
          to="/My Account"
        >
          <span>My Account</span>
        </NavLink>
        {session && session.user.user_metadata.admin ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
            to="/Products"
          >
            <span>Products</span>
          </NavLink>
        ) : (
          ""
        )}
        {session && session.user.user_metadata.admin ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
            to="/Blogs"
          >
            <span>Blogs</span>
          </NavLink>
        ) : (
          ""
        )}
        <span
          onClick={() => {
            signOut();
            onSetSigned("out");
            navigate("/");
          }}
        >
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
