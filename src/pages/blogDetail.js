import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import BlogDetail from "../components/BlogDetail";
import { Helmet } from "react-helmet";

const blogDetail = () => {
  return (
    <div>
      <Helmet>
        <title>{"Blog"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <BlogDetail />
      <Footer />
    </div>
  );
};

export default blogDetail;
