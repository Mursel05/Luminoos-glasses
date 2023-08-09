import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Section from "../components/Section";
import Slider from "../components/Slider";
const home = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
};

export default home;
