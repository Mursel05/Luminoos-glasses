import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Brands from "../components/Brands";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Blog from "../components/Blog";
import BestSeller from "../components/BestSeller";
const home = () => {
  return (
    <div className="page">
      <Navbar />
      <Section />
      <Slider />
      <BestSeller />
      <Brands />
      <Blog />
      <Footer />
    </div>
  );
};

export default home;
