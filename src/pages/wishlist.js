import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wishlist from "../components/Wishlist";
import Section from "../components/Section";
import { Helmet } from "react-helmet";
const wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>{"Wishlist"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Wishlist />
      <Footer />
    </div>
  );
};

export default wishlist;
