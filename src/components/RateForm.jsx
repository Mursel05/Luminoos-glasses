import React from "react";
import supabase from "../supabase";
import { useState } from "react";

const RateForm = ({ product, appear, onSetAppear }) => {
  const theme = localStorage.getItem("mode");

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
    <div className={appear}>
      <div className="header">
        <span>Add review</span>
        <img
          src={`/images/${theme}/icons/cancel-icon.png`}
          alt="cancel"
          onClick={() => onSetAppear("send-review")}
        />
      </div>
      <form action="/" onSubmit={sendForm}>
        <div>
          <div className="send-rate">
            <span>Rate:</span>
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
          <span className={errorRate}>Please rate</span>
        </div>
        <div>
          <div className="label-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <span className={errorName}>Should not be empty</span>
        </div>
        <div>
          <div className="label-input">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <span className={errorDescription}>Should not be empty</span>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default RateForm;
