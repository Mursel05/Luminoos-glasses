import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import { Helmet } from "react-helmet";

const blogs = () => {
  return (
    <div>
      <Helmet>
        <title>{"Blogs"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Blogs />
      <Footer />
    </div>
  );
};

export default blogs;
