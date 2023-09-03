import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BlogSingle from "./BlogSingle";

const BlogDetail = () => {
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.fetchReducer.blogs);
  let id = useParams();
  const blog = blogs.find((blog) => blog.id == id.id);
  return (
    blog && (
      <div className="blog-page">
        <div className="blog-detail">
          <h1>{blog.header}</h1>
          <span>{blog.date}</span>
          <div className="img-answer">
            <img src={blog.image} alt="blog" />
            <div className="answer-link">
              <span>{blog.answer}</span>
              {blog.button && (
                <button onClick={() => navigate(`/${blog.button}`)}>
                  {`Go to ${blog.button}`}
                </button>
              )}
            </div>
          </div>
        </div>
        <h1>Other Blogs</h1>
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
