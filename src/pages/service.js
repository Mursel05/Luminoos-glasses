import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

const service = () => {
  return (
    <div>
      <Helmet>
        <title>{"Service"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Service />
      <Footer />
    </div>
  );
};

export default service;
