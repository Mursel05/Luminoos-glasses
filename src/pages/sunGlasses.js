import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SunGlasses from "../components/SunGlasses";
import Section from "../components/Section";
const sunGlasses = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <SunGlasses />
      <Footer />
    </div>
  );
};

export default sunGlasses;
