import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brands = () => {
  const slides = [
    { image: "/images/brands/persol.png" },
    { image: "/images/brands/gucci.png" },
    { image: "/images/brands/adidas.png" },
    { image: "/images/brands/hyperx.png" },
    { image: "/images/brands/razer.png" },
    { image: "/images/brands/ray-ban.png" },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="brands">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={2500}
        centerMode={true}
      >
        {slides.map((slide) => {
          return <img src={slide.image} alt="brand" />;
        })}
      </Carousel>
    </div>
  );
};

export default Brands;
