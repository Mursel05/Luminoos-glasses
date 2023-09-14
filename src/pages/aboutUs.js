import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

const aboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>{"About Us"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default aboutUs;
