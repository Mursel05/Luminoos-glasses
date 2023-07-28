import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import Search from "../components/Search";
const home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default home;
