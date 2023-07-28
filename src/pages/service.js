import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Search from "../components/Search";

const service = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Service />
      <Footer />
    </div>
  );
};

export default service;
