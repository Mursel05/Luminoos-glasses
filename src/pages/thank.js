import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Thank from "../components/Thank";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const thank = () => {
  return (
    <div>
      <Helmet>
        <title>{"Thanks"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Thank />
      <Footer />
    </div>
  );
};

export default thank;
