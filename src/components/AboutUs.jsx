import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>Buy glasses at Luminoos.</h1>
      </div>
      <div className="about-text">
        <span>
          Welcome to Luminoos, where style meets vision! We're not just about
          eyewear; we're about helping you see the world in a whole new light,
          while looking fabulous doing it. Our passion for eyeglasses goes
          beyond functionality; it's about expressing your unique personality
          and enhancing your everyday experiences.
        </span>
        <div className="about-features">
          <div>
            <p>Our Story</p>
            <span>
              Our journey began with a simple vision: to provide top-quality
              eyewear that combines fashion and function. Founded by a team of
              eyewear enthusiasts, [Your Glasses Website Name] has evolved into
              a trusted destination for trendy eyeglasses and sunglasses. <br />
              <br />
              As eyewear connoisseurs ourselves, we understand the importance of
              finding the perfect pair. Whether you're seeking the latest
              fashion trends, timeless classics, or specialized prescription
              glasses, we've got you covered. Our carefully curated collection
              features a wide range of styles, colors, and materials to suit
              every taste and need.
            </span>
          </div>
          <img src="/images/backgrounds/about-us-side.jpg" alt="black glasses" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
