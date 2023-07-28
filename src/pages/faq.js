import React from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Search from "../components/Search";

const faq = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Faq />
      <Footer />
    </div>
  );
};

export default faq;
