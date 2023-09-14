import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import SpecialProducts from "../components/SpecialProducts";
import { Helmet } from "react-helmet";

const specialProducts = () => {
  return (
    <div>
      <Helmet>
        <title>{"Luminoos"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <SpecialProducts />
      <Footer />
    </div>
  );
};

export default specialProducts;
