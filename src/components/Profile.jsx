import supabase from "../supabase";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Profile = ({ hiddenPart, onSetSigned }) => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  const navigate = useNavigate();
  return (
    <div className={`${hiddenPart} profile`}>
      <span>Welcome Back</span>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navLink" : "navLink"
          }
          to="/My Account"
        >
          <span>My Account</span>
        </NavLink>
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
