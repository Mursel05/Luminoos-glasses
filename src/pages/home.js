import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Brands from "../components/Brands";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Blog from "../components/Blog";
import BestSeller from "../components/BestSeller";
import { Helmet } from "react-helmet";
const home = () => {
  return (
    <div className="page">
      <Helmet>
        <title>{"Luminoos"}</title>
      </Helmet>
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
