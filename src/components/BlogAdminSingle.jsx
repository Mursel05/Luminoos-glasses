import React from "react";
import { useState } from "react";
import supabase from "../supabase";

const BlogAdminSingle = ({ blog }) => {
  const [image, setImage] = useState(blog ? blog.image : "");
  const [imageError, setImageError] = useState("error hidden");
  const [header, setHeader] = useState(blog ? blog.header : "");
  const [headerError, setHeaderError] = useState("error hidden");
  const [answer, setAnswer] = useState(blog ? blog.answer : "");
  const [answerError, setAnswerError] = useState("error hidden");
  const [date, setDate] = useState(blog ? blog.date : "");
  const [dateError, setDateError] = useState("error hidden");
  const [button, setButton] = useState(blog ? blog.button : "");
  async function update() {
    const { error } = await supabase
      .from("blogs")
      .update({ image, header, answer, date, button })
      .eq("id", blog.id);
    window.location.reload();
  }
  async function remove() {
    const { error } = await supabase.from("blogs").delete().eq("id", blog.id);
    window.location.reload();
  }
  async function create() {
    const { error } = await supabase
      .from("blogs")
      .insert({ image, header, answer, date, button });
    window.location.reload();
  }
  return (
    <div className="blog-edit">
      <div className="blog-row">
        <span>{blog && blog.id}</span>
        <div className="error-input">
          <input
            className="image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <span className={imageError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <input
            className="date"
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          <span className={dateError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <input
            className="header"
            type="text"
            onChange={(e) => setHeader(e.target.value)}
            value={header}
          />
          <span className={headerError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <textarea
            onChange={(e) => setAnswer(e.target.value)}
            cols="40"
            rows="5"
            value={answer}
          ></textarea>
          <span className={answerError}>Should not be empty!</span>
        </div>
        <input
          className="button"
          type="text"
          onChange={(e) => setButton(e.target.value)}
          value={button}
        />
      </div>
      {blog ? (
        <div className="edit">
          <button
            onClick={() => {
              if (
                image === blog.image &&
                header === blog.header &&
                date === blog.date &&
                answer === blog.answer
              ) {
              } else if (image && header && date && answer) {
                update();
              } else {
                !image && setImageError("error");
                !date && setDateError("error");
                !header && setHeaderError("error");
                !answer && setAnswerError("error");
              }
            }}
          >
            Update
          </button>
          <button onClick={remove} className="delete">
            Delete
          </button>
        </div>
      ) : (
        <div className="edit">
          <button
            onClick={() => {
              if (image && header && date && answer) {
                create();
              } else {
                !image && setImageError("error");
                !date && setDateError("error");
                !header && setHeaderError("error");
                !answer && setAnswerError("error");
              }
            }}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogAdminSingle;
