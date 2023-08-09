import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Section from "../components/Section";

const cart = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Cart />
      <Footer />
    </div>
  );
};

export default cart;
