import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import GameGlasses from "../components/GameGlasses";
import Sort from "../components/Sort";
import { Helmet } from "react-helmet";

const gameGlasses = () => {
  return (
    <div>
      <Helmet>
        <title>{"Game Glasses"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Sort />
      <GameGlasses />
      <Footer />
    </div>
  );
};
export default gameGlasses;
