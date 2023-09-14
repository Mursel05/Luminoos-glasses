import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

const contactUs = () => {
  return (
    <div>
      <Helmet>
        <title>{"Contact Us"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default contactUs;
