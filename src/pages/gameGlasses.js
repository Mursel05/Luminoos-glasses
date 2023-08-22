import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import GameGlasses from "../components/GameGlasses";

const gameGlasses = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <GameGlasses />
      <Footer />
    </div>
  );
};
export default gameGlasses;
