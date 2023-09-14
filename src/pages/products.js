import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { Helmet } from "react-helmet";

const products = () => {
  return (
    <div>
      <Helmet>
        <title>{"Products"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Products />
      <Footer />
    </div>
  );
};

export default products;
