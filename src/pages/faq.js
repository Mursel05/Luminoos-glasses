import React from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Section from "../components/Section";

const faq = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Faq />
      <Footer />
    </div>
  );
};

export default faq;
