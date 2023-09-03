import React from "react";
import { useSelector } from "react-redux";
import BlogAdminSingle from "./BlogAdminSingle";

const Blogs = () => {
  const blogs = useSelector((state) => state.fetchReducer.blogs);
  return (
    <div className="admin-blogs">
      <div className="blogs-row">
        <span>Id</span>
        <span className="image">Image</span>
        <span className="date">Date</span>
        <span className="header">Header</span>
        <span className="answer">Answer</span>
        <span className="button">Button</span>
        <span>Edit</span>
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
