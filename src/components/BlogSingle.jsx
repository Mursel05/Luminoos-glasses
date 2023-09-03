import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const BlogSingle = ({ blog }) => {
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
          <p className="blog-question">{blog.header}</p>
        </NavLink>
        <span className="blog-answer">
          "Not sure what your glasses measurements are or how to find them? Keep
          reading, you’ll find all the information you need! The...
        </span>
      </div>
    </div>
  );
};

export default BlogSingle;
