import React from "react";

const FaqItem = ({ item, open, onSetOpen }) => {
  return (
    <div className={open === item.id ? "open item" : "item"}>
      <div className="first-part">
        <div className="id-question">
          <div className="id-circle">
            <p>{item.id}</p>
          </div>
          <span>{item.question}</span>
        </div>
        <img
          onClick={() => onSetOpen(open === item.id ? "" : item.id)}
          src="/images/light/icons/arrow-icon-down.png"
          alt="arrow"
        />
      </div>
      <span className="item-answer">{item.answer}</span>
    </div>
  );
};

export default FaqItem;
