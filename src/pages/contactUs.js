import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Section from "../components/Section";

const contactUs = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default contactUs;
