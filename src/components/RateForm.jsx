import React from "react";
import supabase from "../supabase";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../Router";
import langData from "../languageData";
import { useEffect } from "react";

const RateForm = ({ product, appearForm, onSetAppearForm }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].details);

  useEffect(() => {
    setData(langData[language].details);
  }, [language]);

  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errorRate, setErrorRate] = useState("error hidden");
  const [errorName, setErrorName] = useState("error hidden");
  const [errorDescription, setErrorDescription] = useState("error hidden");

  async function addReview() {
    if (product.review != "[]") {
      const { error1 } = await supabase
        .from("Products")
        .update({
          review: [...product.review, { name, rate, description }],
        })
        .eq("id", product.id);
    } else {
      const { error1 } = await supabase
        .from("Products")
        .update({ review: [{ name, rate, description }] })
        .eq("id", product.id);
    }
  }
  function sendForm(e) {
    e.preventDefault();
    if (!rate) {
      setErrorRate("error");
    } else if (!name) {
      setErrorRate("error hidden");
      setErrorName("error");
    } else if (!description) {
      setErrorName("error hidden");
      setErrorDescription("error");
    } else {
      addReview();
      window.location.reload();
    }
  }
  return (
    <div className={appearForm}>
      <div className="header">
        <span>{data.formHeader}</span>
        <img
          src={"/images/light/icons/cancel-icon.png"}
          alt="cancel"
          onClick={() => onSetAppearForm("send-review")}
        />
      </div>
      <form action="/" onSubmit={sendForm}>
        <div>
          <div className="send-rate">
            <span>{data.rate}</span>
            <img
              src={
                rate > 0
                  ? "/images/light/icons/star-icon-point.png"
                  : "/images/light/icons/star-icon.png"
              }
              alt="star"
              onClick={() => setRate(1)}
            />
            <img
              src={
                rate > 1
                  ? "/images/light/icons/star-icon-point.png"
                  : "/images/light/icons/star-icon.png"
              }
              alt="star"
              onClick={() => setRate(2)}
            />
            <img
              src={
                rate > 2
                  ? "/images/light/icons/star-icon-point.png"
                  : "/images/light/icons/star-icon.png"
              }
              alt="star"
              onClick={() => setRate(3)}
            />
            <img
              src={
                rate > 3
                  ? "/images/light/icons/star-icon-point.png"
                  : "/images/light/icons/star-icon.png"
              }
              alt="star"
              onClick={() => setRate(4)}
            />
            <img
              src={
                rate > 4
                  ? "/images/light/icons/star-icon-point.png"
                  : "/images/light/icons/star-icon.png"
              }
              alt="star"
              onClick={() => setRate(5)}
            />
          </div>
          <span className={errorRate}>{data.rateError}</span>
        </div>
        <div>
          <div className="label-input">
            <label htmlFor="name">{data.name}</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <span className={errorName}>{data.error}</span>
        </div>
        <div>
          <div className="label-input">
            <label htmlFor="description">{data.descriptionReview}</label>
            <textarea
              type="text"
              id="description"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <span className={errorDescription}>{data.error}</span>
        </div>
        <button>{data.formBtn}</button>
      </form>
    </div>
  );
};

export default RateForm;
