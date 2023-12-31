import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../App";
import langData from "../languageData";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BlogSingle from "./BlogSingle";

const Blog = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].blog);
  useEffect(() => {
    setData(langData[language].blog);
  }, [language]);

  const blogs = useSelector((state) => state.fetchReducer.blogs);

  return (
    <div className="blog">
      <h1>{data.header}</h1>
      <div className="blogs">
        {blogs.map((blog) => {
          return <BlogSingle blog={blog} language={language} key={blog.id} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
