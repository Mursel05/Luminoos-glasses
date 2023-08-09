import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Section from "../components/Section";

const aboutUs = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default aboutUs;
