import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import useWindowDimensions from "./GetWindowDimensions";

const Slider = () => {
  const { touch, width } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <div className="slider">
      <Slide>
        <div className="each-slide-effect">
          <div className="barbie-slide-effect">
            <div className="barbie-slider">
              <h1>Let’s Go Party</h1>
              <p>
                From the beach to your dream house, <br />
                these vibrant pink styles turn heads.
              </p>
              <button
                onClick={() => {
                  navigate("/Special Products/colorEn/Pink");
                }}
              >
                Go to shopping
              </button>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div className="promo-code-slider">
            <button
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Enter code
            </button>
          </div>
        </div>
        <div className="each-slide-effect">
          <div className="service-slider">
            <div>
              <p>
                We can repair <br /> your broken glasses
              </p>
              <NavLink to="/Service">
                <span>Go to service →</span>
              </NavLink>
            </div>
            <img
              src="/images/advertizes/repair-glasses.png"
              alt="person repairs glasses"
            />
          </div>
        </div>
        <div className="each-slide-effect">
          <div className="discount-slide-effect">
            <div className="discount-slider">
              <span className="slider-header">Eyes on Summer</span>
              <span className="slider-main">
                30% OFF <br />
                Orders $100+
              </span>
              <span className="slider-description">
                Set your sights on summer <br /> with a new look for less.
              </span>
              <button
                onClick={() => {
                  navigate("/Sunglasses");
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
