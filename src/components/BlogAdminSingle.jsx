import React from "react";
import { useState } from "react";
import supabase from "../supabase";
import { useContext } from "react";
import langData from "../languageData";
import { useEffect } from "react";
import { LanguageContext } from "../App";

const BlogAdminSingle = ({ blog }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].blog);

  useEffect(() => {
    setData(langData[language].blog);
  }, [language]);

  const [image, setImage] = useState(blog ? blog.image : "");
  const [imageError, setImageError] = useState("error hidden");
  const [header, setHeader] = useState(blog ? blog.headerEn : "");
  const [headerError, setHeaderError] = useState("error hidden");
  const [answer, setAnswer] = useState(blog ? blog.answerEn : "");
  const [answerError, setAnswerError] = useState("error hidden");
  const [date, setDate] = useState(blog ? blog.date : "");
  const [dateError, setDateError] = useState("error hidden");
  const [button, setButton] = useState(blog ? blog.button : "");
  async function update() {
    const { error } = await supabase
      .from("blogs")
      .update({ image, headerEn: header, answerEn: answer, date, button })
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
      .insert({ image, headerEn: header, answerEn: answer, date, button });
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
          <span className={imageError}>{data.error}</span>
        </div>
        <div className="error-input">
          <input
            className="date"
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          <span className={dateError}>{data.error}</span>
        </div>
        <div className="error-input">
          <input
            className="header"
            type="text"
            onChange={(e) => setHeader(e.target.value)}
            value={header}
          />
          <span className={headerError}>{data.error}</span>
        </div>
        <div className="error-input">
          <textarea
            onChange={(e) => setAnswer(e.target.value)}
            cols="40"
            rows="5"
            value={answer}
          ></textarea>
          <span className={answerError}>{data.error}</span>
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
                header === blog.headerEn &&
                date === blog.date &&
                answer === blog.answerEn
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
            {data.updBtn}
          </button>
          <button onClick={remove} className="delete">
            {data.dltBtn}
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
            {data.crtBtn}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogAdminSingle;
