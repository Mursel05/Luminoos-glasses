import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sunglasses from "../components/Sunglasses";
import Section from "../components/Section";
import Sort from "../components/Sort";
const sunglasses = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Sort />
      <Sunglasses />
      <Footer />
    </div>
  );
};

export default sunglasses;
