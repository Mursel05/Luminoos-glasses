import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div className="slider">
      <Slide>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: "url(/images/advertizes/barbie-discount.png)",
              backgroundSize: "1200px 290px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="barbie-slider">
              <h1>Let’s Go Party</h1>
              <p>
                From the beach to your dream house, <br />
                these vibrant pink styles turn heads.
              </p>
              <button>Go to shopping</button>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="promo-code-slider"
            style={{
              backgroundImage:
                "url(/images/advertizes/promo-code-discount.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1200px 290px",
            }}
          >
            <button>Enter code</button>
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
          <div
            style={{
              backgroundImage: "/images/advertizes/top60-discount.png",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1200px 290px",
            }}
          >
            <div className="discount-slider">
              <span className="slider-header">Eyes on Summer</span>
              <span className="slider-main">
                30% OFF <br />
                Orders $60+
              </span>
              <span className="slider-description">
                Set your sights on summer <br /> with a new look for less.
              </span>
              <button>Shop now</button>{" "}
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
