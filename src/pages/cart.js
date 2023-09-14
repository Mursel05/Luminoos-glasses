import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

const cart = () => {
  return (
    <div>
      <Helmet>
        <title>{"Cart"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Cart />
      <Footer />
    </div>
  );
};

export default cart;
