import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const navigate = useNavigate();
  const theme = localStorage.getItem("mode");
  const slides = [
    { image: `/images/brands/persol-${theme}.png`, brand: "Persol", id: 1 },
    { image: `/images/brands/gucci-${theme}.png`, brand: "Gucci", id: 2 },
    { image: `/images/brands/adidas-${theme}.png`, brand: "Adidas", id: 3 },
    { image: `/images/brands/hyperx-${theme}.png`, brand: "HyperX", id: 4 },
    { image: `/images/brands/razer-${theme}.png`, brand: "Razer", id: 5 },
    {
      image: `/images/brands/ray-ban-${theme}.png`,
      brand: "Ray-Ban",
      id: 6,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.7,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0.76,
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
          return (
            <img
              src={slide.image}
              alt="brand"
              key={slide.id}
              onClick={() => navigate(`/Special Products/brand/${slide.brand}`)}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Brands;
