import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BlogSingle from "./BlogSingle";
import { useContext } from "react";
import langData from "../languageData";
import { useEffect } from "react";
import { useState } from "react";
import { LanguageContext } from "../Router";

const BlogDetail = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].blog);

  useEffect(() => {
    setData(langData[language].blog);
  }, [language]);

  const navigate = useNavigate();
  const blogs = useSelector((state) => state.fetchReducer.blogs);
  let id = useParams();
  const blog = blogs.find((blog) => blog.id == id.id);
  return (
    blog && (
      <div className="blog-page">
        <div className="blog-detail">
          <h1>{language === "en" ? blog.headerEn : blog.headerAz}</h1>
          <span>{blog.date}</span>
          <div className="img-answer">
            <img src={blog.image} alt="blog" />
            <div className="answer-link">
              <span>{language === "en" ? blog.answerEn : blog.answerAz}</span>
              {blog.button && (
                <button onClick={() => navigate(`/${blog.button}`)}>
                  {`${data.actBtn} ${blog.button}`}
                </button>
              )}
            </div>
          </div>
        </div>
        <h1>{data.detailHeader}</h1>
        <div className="blogs">
          {blogs.map((blog) => {
            return blog.id != id.id && <BlogSingle blog={blog} key={blog.id} />;
          })}
        </div>
      </div>
    )
  );
};

export default BlogDetail;
