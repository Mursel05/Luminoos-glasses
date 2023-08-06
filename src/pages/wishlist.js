import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Wishlist from "../components/Wishlist";
const wishlist = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Wishlist />
      <Footer />
    </div>
  );
};

export default wishlist;
