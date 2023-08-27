import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import GameGlasses from "../components/GameGlasses";
import Sort from "../components/Sort";

const gameGlasses = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Sort />
      <GameGlasses />
      <Footer />
    </div>
  );
};
export default gameGlasses;
