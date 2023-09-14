import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Account from "../components/Account";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const account = () => {
  return (
    <div>
      <Helmet>
        <title>{"Account"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Account />
      <Footer />
    </div>
  );
};

export default account;
