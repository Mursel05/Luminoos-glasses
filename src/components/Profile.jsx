import supabase from "../supabase";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LanguageContext, LoginContext } from "../Router";
import { useContext } from "react";
import { useState } from "react";
import langData from "../languageData";
import { useEffect } from "react";

const Profile = ({ hiddenPart, onSetSigned }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].profile);

  useEffect(() => {
    setData(langData[language].profile);
  }, [language]);
  const session = useContext(LoginContext);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  const navigate = useNavigate();
  return (
    <div className={`${hiddenPart} signed`}>
      <span className="header">{data.header}</span>
      <div className="signed-links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navLink" : "navLink"
          }
          to="/My Account"
        >
          <span>{data.link1}</span>
        </NavLink>
        {session && session.user.user_metadata.admin ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active navLink" : "navLink"
            }
            to="/Products"
          >
            <span>{data.link2}</span>
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
            <span>{data.link3}</span>
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
          {data.link4}
        </span>
      </div>
    </div>
  );
};

export default Profile;
