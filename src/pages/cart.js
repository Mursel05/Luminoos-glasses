import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const cart = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Cart />
      <Footer />
    </div>
  );
};

export default cart;
