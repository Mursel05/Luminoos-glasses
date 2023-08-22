import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sunglasses from "../components/Sunglasses";
import Section from "../components/Section";
const sunglasses = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Sunglasses />
      <Footer />
    </div>
  );
};

export default sunglasses;
