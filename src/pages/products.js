import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Products from "../components/Products";

const products = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Products />
      <Footer />
    </div>
  );
};

export default products;
