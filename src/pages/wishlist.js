import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wishlist from "../components/Wishlist";
import Section from "../components/Section";
const wishlist = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Wishlist />
      <Footer />
    </div>
  );
};

export default wishlist;
