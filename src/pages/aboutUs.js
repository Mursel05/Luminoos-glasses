import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Search from "../components/Search";

const aboutUs = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default aboutUs;
