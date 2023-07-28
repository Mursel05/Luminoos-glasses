import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import SunGlasses from "../components/SunGlasses";

const gameGlasses = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <SunGlasses />
      <Footer />
    </div>
  );
};
export default gameGlasses;
