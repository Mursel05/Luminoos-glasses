import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import ContactUs from "../components/ContactUs";

const contactUs = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default contactUs;
