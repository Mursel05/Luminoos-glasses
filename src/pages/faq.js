import React from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

const faq = () => {
  return (
    <div>
      <Helmet>
        <title>{"FAQ"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Faq />
      <Footer />
    </div>
  );
};

export default faq;
