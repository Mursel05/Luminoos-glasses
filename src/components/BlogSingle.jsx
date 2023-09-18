import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import langData from "../languageData";
import { useState } from "react";
import { useEffect } from "react";
import { LanguageContext } from "../App";

const BlogSingle = ({ blog }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].blog);

  useEffect(() => {
    setData(langData[language].blog);
  }, [language]);
  const navigate = useNavigate();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="blogs-part">
      <img
        src={blog.image}
        alt="blog"
        onClick={() => {
          goToTop();
          navigate(`/Blog/${blog.id}`);
        }}
      />
      <div className="blog-details">
        <span className="blog-date">{blog.date}</span>
        <NavLink
          onClick={() => goToTop()}
          to={`/Blog/${blog.id}`}
          className={({ isActive }) => (isActive ? "navLink" : "navLink")}
        >
          <p className="blog-question">
            {language === "en" ? blog.headerEn : blog.headerAz}
          </p>
        </NavLink>
        <span className="blog-answer">{data.blogAnswer}</span>
      </div>
    </div>
  );
};

export default BlogSingle;
