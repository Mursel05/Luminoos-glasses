import React from "react";
import { useSelector } from "react-redux";
import BlogAdminSingle from "./BlogAdminSingle";
import { useContext } from "react";
import langData from "../languageData";
import { useEffect } from "react";
import { useState } from "react";
import { LanguageContext } from "../App";

const Blogs = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].blog);

  useEffect(() => {
    setData(langData[language].blog);
  }, [language]);
  const blogs = useSelector((state) => state.fetchReducer.blogs);
  return (
    <div className="admin-blogs">
      <div className="blogs-row">
        <span>Id</span>
        <span className="image">{data.image}</span>
        <span className="date">{data.date}</span>
        <span className="header">{data.headerItem}</span>
        <span className="answer">{data.answer}</span>
        <span className="button">{data.button}</span>
        <span>{data.edit}</span>
      </div>
      {blogs.map((blog) => (
        <BlogAdminSingle blog={blog} key={blog.id} />
      ))}
      <div>
        <BlogAdminSingle />
      </div>
    </div>
  );
};

export default Blogs;
