import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brands = () => {
  const slides = [
    { image: "/images/brands/persol.png", id: 1 },
    { image: "/images/brands/gucci.png", id: 2 },
    { image: "/images/brands/adidas.png", id: 3 },
    { image: "/images/brands/hyperx.png", id: 4 },
    { image: "/images/brands/razer.png", id: 5 },
    { image: "/images/brands/ray-ban.png", id: 6 },
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
          return <img src={slide.image} alt="brand" key={slide.id} />;
        })}
      </Carousel>
    </div>
  );
};

export default Brands;
