import React from "react";

const ShowReview = ({ item }) => {
  return (
    <div className="review-single">
      <div className="name-rate">
        <span>{item.name}</span>
        <div className="rate">
          <img
            src={
              item.rate > 0
                ? "/images/light/icons/star-icon-point.png"
                : "/images/light/icons/star-icon.png"
            }
            alt="star"
          />
          <img
            src={
              item.rate > 1
                ? "/images/light/icons/star-icon-point.png"
                : "/images/light/icons/star-icon.png"
            }
            alt="star"
          />
          <img
            src={
              item.rate > 2
                ? "/images/light/icons/star-icon-point.png"
                : "/images/light/icons/star-icon.png"
            }
            alt="star"
          />
          <img
            src={
              item.rate > 3
                ? "/images/light/icons/star-icon-point.png"
                : "/images/light/icons/star-icon.png"
            }
            alt="star"
          />
          <img
            src={
              item.rate > 4
                ? "/images/light/icons/star-icon-point.png"
                : "/images/light/icons/star-icon.png"
            }
            alt="star"
          />
        </div>
      </div>
      <span className="description">{item.description}</span>
    </div>
  );
};

export default ShowReview;
